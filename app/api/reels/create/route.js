import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const user = await getUserFromCookie(); // ← تم إصلاح المشكلة هنا
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const caption = formData.get("caption");
    const video = formData.get("video");

    if (!video || typeof video !== "object") {
      return NextResponse.json({ error: "Video required" }, { status: 400 });
    }

    // تحويل الفيديو إلى Buffer
    const arrayBuffer = await video.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // رفع الفيديو على Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "reels",
          resource_type: "video", // ضروري جداً
        },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      ).end(buffer);
    });

    const videoUrl = uploadResult.secure_url;

    // حفظ الريل في قاعدة البيانات
    const reel = await prisma.reel.create({
      data: {
        caption: caption || "",
        video: videoUrl,
        authorId: user.id,
      },
    });

    return NextResponse.json({ reel });
  } catch (err) {
    console.error("Create reel error:", err);
    return NextResponse.json(
      { error: "Failed to create reel" },
      { status: 500 }
    );
  }
}
