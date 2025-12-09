import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { writeFile } from "fs/promises";
import path from "path";

// GET a reel by ID
export async function GET(req, context) {
  try {
    const { id } = context.params;

    const reel = await prisma.reel.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true, email: true } },
        likes: { include: { user: true } },
        comments: {
          where: { parentId: null },
          include: {
            author: { select: { id: true, name: true } },
            likes: { select: { userId: true } },
            replies: {
              include: {
                author: { select: { id: true, name: true } },
                likes: { select: { userId: true } },
                replies: true, // optional: deeper nested replies
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!reel) return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    return NextResponse.json({ reel });
  } catch (err) {
    console.error("Get reel error:", err);
    return NextResponse.json({ error: "Failed to get reel" }, { status: 500 });
  }
}

// PUT (edit) reel
export async function PUT(req, context) {
  try {
    const { id } = context.params;
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const reel = await prisma.reel.findUnique({ where: { id } });
    if (!reel) return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    if (reel.authorId !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const formData = await req.formData();
    const caption = formData.get("caption") || reel.caption;
    const videoFile = formData.get("video");

    let videoUrl = reel.video;

    if (videoFile && videoFile.size > 0) {
      const buffer = Buffer.from(await videoFile.arrayBuffer());
      const filename = `${Date.now()}-${videoFile.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filePath, buffer);
      videoUrl = `/uploads/${filename}`;
    }

    const updatedReel = await prisma.reel.update({
      where: { id },
      data: { caption, video: videoUrl },
    });

    return NextResponse.json({ reel: updatedReel });
  } catch (err) {
    console.error("Update reel error:", err);
    return NextResponse.json({ error: "Failed to update reel" }, { status: 500 });
  }
}

// DELETE reel
export async function DELETE(req, context) {
  try {
    const { id } = context.params;
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const reel = await prisma.reel.findUnique({ where: { id } });
    if (!reel) return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    if (reel.authorId !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    await prisma.reel.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete reel error:", err);
    return NextResponse.json({ error: "Failed to delete reel" }, { status: 500 });
  }
}
