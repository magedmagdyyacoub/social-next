import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const reels = await prisma.reel.findMany({
      take: 4,
      orderBy: { createdAt: "desc" },
      include: {
        author: true,
        likes: { include: { user: true } },
        comments: {
          include: { author: true },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json({ reels });
  } catch (err) {
    console.error("Fetch random reels error:", err);
    return NextResponse.json(
      { error: "Failed to fetch reels" },
      { status: 500 }
    );
  }
}
