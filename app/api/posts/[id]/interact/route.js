import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

// GET likes & comments for a post (including nested comments)
export async function GET(req, context) {
  try {
    const params = await context.params; // unwrap
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        likes: { select: { userId: true } },
        comments: {
          where: { parentId: null }, // top-level comments only
          include: {
            author: { select: { id: true, name: true } },
            replies: {
              include: {
                author: { select: { id: true, name: true } },
                likes: { select: { userId: true } },
                replies: true, // recursively include replies (optional: limit depth if needed)
              },
            },
            likes: { select: { userId: true } },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json({ likes: post.likes, comments: post.comments });
  } catch (err) {
    console.error("Get interactions error:", err);
    return NextResponse.json(
      { error: "Failed to fetch interactions" },
      { status: 500 }
    );
  }
}

// POST like/unlike or comment/reply
export async function POST(req, context) {
  try {
    const params = await context.params; // unwrap
    const { id } = params;

    const user = await getUserFromCookie(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();

    // Like/unlike post
    if (data.type === "like") {
      const existing = await prisma.like.findUnique({
        where: { postId_userId: { postId: id, userId: user.id } },
      });

      if (existing) {
        await prisma.like.delete({
          where: { postId_userId: { postId: id, userId: user.id } },
        });
        return NextResponse.json({ liked: false });
      } else {
        await prisma.like.create({ data: { postId: id, userId: user.id } });
        return NextResponse.json({ liked: true });
      }
    }

    // Comment or reply
    else if (data.type === "comment") {
      if (!data.content || data.content.trim() === "")
        return NextResponse.json({ error: "Empty comment" }, { status: 400 });

      const commentData = {
        postId: id,
        authorId: user.id,
        content: data.content,
        emoji: data.emoji || null,
      };

      // If parentId exists, this is a reply
      if (data.parentId) commentData.parentId = data.parentId;

      const comment = await prisma.comment.create({ data: commentData });

      return NextResponse.json({ comment });
    }

    // Invalid type
    else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
  } catch (err) {
    console.error("Post interaction error:", err);
    return NextResponse.json({ error: "Failed to interact" }, { status: 500 });
  }
}
