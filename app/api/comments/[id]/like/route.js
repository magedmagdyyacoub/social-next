import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

// POST like/unlike a comment
export async function POST(req, context) {
  try {
    const params = await context.params; // unwrap params
    const { id: commentId } = params;

    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // check if comment exists
    const comment = await prisma.comment.findUnique({ where: { id: commentId } });
    if (!comment) return NextResponse.json({ error: "Comment not found" }, { status: 404 });

    // check if user already liked the comment
    const existingLike = await prisma.commentLike.findUnique({
      where: { commentId_userId: { commentId, userId: user.id } },
    });

    if (existingLike) {
      // unlike
      await prisma.commentLike.delete({
        where: { commentId_userId: { commentId, userId: user.id } },
      });
      return NextResponse.json({ liked: false });
    } else {
      // like
      await prisma.commentLike.create({
        data: { commentId, userId: user.id },
      });
      return NextResponse.json({ liked: true });
    }
  } catch (err) {
    console.error("Comment like error:", err);
    return NextResponse.json({ error: "Failed to interact with comment" }, { status: 500 });
  }
}
