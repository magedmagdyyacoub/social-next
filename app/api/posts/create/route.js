import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadToCloudinary(file, type = "image") {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "posts", resource_type: type },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    ).end(buffer);
  });
}

export async function POST(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const form = await req.formData();

    const title = form.get("title");
    const content = form.get("content");
    const image = form.get("image");
    const video = form.get("video");

    if (!title || !content)
      return NextResponse.json({ error: "Title and content required" }, { status: 400 });

    let imageUrl = null;
    let videoUrl = null;

    if (image instanceof File) {
      const upload = await uploadToCloudinary(image, "image");
      imageUrl = upload.secure_url;
    }

    if (video instanceof File) {
      const upload = await uploadToCloudinary(video, "video");
      videoUrl = upload.secure_url;
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        image: imageUrl,
        video: videoUrl,
        authorId: user.id,
      },
    });

    return NextResponse.json({ post });
  } catch (err) {
    console.error("Create post error:", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
