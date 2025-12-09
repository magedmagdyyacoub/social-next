// app/api/posts/random/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      take: 4,
      orderBy: { createdAt: "desc" }, // أو استخدم orderBy: { createdAt: "desc" } للآخرين
      include: {
        author: true,
        _count: {
          select: { likes: true, comments: true },
        },
        comments: {
          include: { author: true }, // صححنا هنا بدل user
          orderBy: { createdAt: "desc" },
        },
        likes: { include: { user: true } }, // لو حابب ترجع info عن المستخدمين اللي عملوا لايك
      },
    });

    return NextResponse.json({ posts });
  } catch (err) {
    console.error("Fetch random posts error:", err);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
