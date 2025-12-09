import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

// GET reel interactions
export async function GET(req, context) {
  try {
    const { id } = await context.params; // 🔹 await params

    const reel = await prisma.reel.findUnique({
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

    if (!reel) return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    return NextResponse.json({ likes: reel.likes, comments: reel.comments });
  } catch (err) {
    console.error("Get reel interactions error:", err);
    return NextResponse.json({ error: "Failed to fetch interactions" }, { status: 500 });
  }
}

// POST like/unlike or comment
export async function POST(req, context) {
  try {
    const { id } = await context.params; // 🔹 await params
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const data = await req.json();

    // Like/unlike
    if (data.type === "like") {
      const existing = await prisma.reelLike.findUnique({
        where: { reelId_userId: { reelId: id, userId: user.id } },
      });

      if (existing) {
        await prisma.reelLike.delete({
          where: { reelId_userId: { reelId: id, userId: user.id } },
        });
        return NextResponse.json({ liked: false });
      } else {
        await prisma.reelLike.create({ data: { reelId: id, userId: user.id } });
        return NextResponse.json({ liked: true });
      }
    }

    // Comment or reply
    else if (data.type === "comment") {
      if (!data.content || data.content.trim() === "")
        return NextResponse.json({ error: "Empty comment" }, { status: 400 });

      const commentData = {
        reelId: id,
        authorId: user.id,
        content: data.content,
        emoji: data.emoji || null,
      };

      if (data.parentId) commentData.parentId = data.parentId;

      const comment = await prisma.reelComment.create({ data: commentData });
      return NextResponse.json({ comment });
    }

    else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
  } catch (err) {
    console.error("Reel interaction error:", err);
    return NextResponse.json({ error: "Failed to interact" }, { status: 500 });
  }
}
