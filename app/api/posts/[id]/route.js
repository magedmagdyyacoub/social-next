import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { writeFile } from "fs/promises";
import path from "path";

// GET post by ID
export async function GET(req, context) {
  try {
    const params = await context.params;
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: {
        author: { select: { id: true, name: true, email: true } },
        comments: true,
        likes: true,
      },
    });

    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    return NextResponse.json({ post });
  } catch (err) {
    console.error("Get post error:", err);
    return NextResponse.json({ error: "Failed to get post" }, { status: 500 });
  }
}

// PUT post by ID (edit)
export async function PUT(req, context) {
  try {
    const params = await context.params;
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const post = await prisma.post.findUnique({ where: { id: params.id } });
    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    if (post.authorId !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const formData = await req.formData();
    const title = formData.get("title") || post.title;
    const content = formData.get("content") || post.content;
    const imageFile = formData.get("image");
    const videoFile = formData.get("video");

    let imageUrl = post.image;
    let videoUrl = post.video;

    // Save new image if uploaded
    if (imageFile && imageFile.size > 0) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const filename = `${Date.now()}-${imageFile.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filePath, buffer);
      imageUrl = `/uploads/${filename}`;
    }

    // Save new video if uploaded
    if (videoFile && videoFile.size > 0) {
      const buffer = Buffer.from(await videoFile.arrayBuffer());
      const filename = `${Date.now()}-${videoFile.name}`;
      const filePath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filePath, buffer);
      videoUrl = `/uploads/${filename}`;
    }

    const updatedPost = await prisma.post.update({
      where: { id: params.id },
      data: { title, content, image: imageUrl, video: videoUrl },
    });

    return NextResponse.json({ post: updatedPost });
  } catch (err) {
    console.error("Update post error:", err);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// DELETE post by ID
export async function DELETE(req, context) {
  try {
    const params = await context.params;
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const post = await prisma.post.findUnique({ where: { id: params.id } });
    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    if (post.authorId !== user.id) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    await prisma.post.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete post error:", err);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
