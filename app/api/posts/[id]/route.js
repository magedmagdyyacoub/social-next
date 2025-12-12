import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        likes: { select: { userId: true } },
        comments: {
          where: { parentId: null },
          include: {
            author: true,
            likes: { select: { userId: true } },
            replies: {
              include: {
                author: true,
                likes: { select: { userId: true } },
                replies: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json({ post });
  } catch (err) {
    console.error("Get post error:", err);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}
