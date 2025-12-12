import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const caption = formData.get("caption") as string;
    const video = formData.get("video") as File;

    if (!video) {
      return NextResponse.json({ error: "Video required" }, { status: 400 });
    }

    // رفع الفيديو على Cloudinary
    const arrayBuffer = await video.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "reels", resource_type: "video" }, // مهم: resource_type = video
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      ).end(buffer);
    });

    const videoUrl = uploadResult.secure_url;

    // حفظ البيانات في قاعدة البيانات
    const reel = await prisma.reel.create({
      data: {
        caption,
        video: videoUrl,
        authorId: user.id,
      },
    });

    return NextResponse.json({ reel });
  } catch (err) {
    console.error("Create reel error:", err);
    return NextResponse.json({ error: "Failed to create reel" }, { status: 500 });
  }
}
