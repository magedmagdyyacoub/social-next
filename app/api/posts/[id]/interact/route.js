import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

// GET likes & comments
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        likes: { select: { userId: true } },
        comments: {
          where: { parentId: null },
          include: {
            author: { select: { id: true, name: true } },
            likes: { select: { userId: true } },
            replies: {
              include: {
                author: { select: { id: true, name: true } },
                likes: { select: { userId: true } },
                replies: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json({ likes: post.likes, comments: post.comments });
  } catch (err) {
    console.error("Get post interactions error:", err);
    return NextResponse.json({ error: "Failed to fetch interactions" }, { status: 500 });
  }
}

// POST like/comment
export async function POST(req, { params }) {
  try {
    const { id } = params;
    const user = await getUserFromCookie(req);

    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();

    // LIKE / UNLIKE
    if (data.type === "like") {
      const existing = await prisma.like.findUnique({
        where: { postId_userId: { postId: id, userId: user.id } },
      });

      if (existing) {
        await prisma.like.delete({
          where: { postId_userId: { postId: id, userId: user.id } },
        });
        return NextResponse.json({ liked: false });
      }

      await prisma.like.create({
        data: { postId: id, userId: user.id },
      });

      return NextResponse.json({ liked: true });
    }

    // COMMENT / REPLY
    if (data.type === "comment") {
      if (!data.content?.trim())
        return NextResponse.json({ error: "Empty comment" }, { status: 400 });

      const comment = await prisma.comment.create({
        data: {
          postId: id,
          authorId: user.id,
          content: data.content,
          emoji: data.emoji || null,
          parentId: data.parentId || null,
        },
      });

      return NextResponse.json({ comment });
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  } catch (err) {
    console.error("Post interaction error:", err);
    return NextResponse.json({ error: "Failed to interact" }, { status: 500 });
  }
}
