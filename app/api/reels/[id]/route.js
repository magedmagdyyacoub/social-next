import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ========================= GET REEL =========================
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const reel = await prisma.reel.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, name: true, image: true } },
        likes: true,
        comments: {
          where: { parentId: null },
          include: {
            author: { select: { id: true, name: true, image: true } },
            likes: true,
            replies: {
              include: {
                author: true,
                likes: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!reel) {
      return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    }

    return NextResponse.json({ reel });
  } catch (err) {
    console.error("Get reel error:", err);
    return NextResponse.json({ error: "Failed to get reel" }, { status: 500 });
  }
}

// ========================= UPDATE REEL =========================
export async function PUT(req, { params }) {
  try {
    const user = await getUserFromCookie(); // FIXED
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = params;

    const reel = await prisma.reel.findUnique({ where: { id } });
    if (!reel) return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    if (reel.authorId !== user.id)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const form = await req.formData();
    const caption = form.get("caption") || reel.caption;
    const video = form.get("video");

    let videoUrl = reel.video;

    // ادخل هنا إذا كان هناك فيديو جديد
    if (video && typeof video === "object") {
      const buffer = Buffer.from(await video.arrayBuffer());

      // upload to cloudinary
      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "reels",
            resource_type: "video",
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        ).end(buffer);
      });

      videoUrl = upload.secure_url;
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

// ========================= DELETE REEL =========================
export async function DELETE(req, { params }) {
  try {
    const user = await getUserFromCookie(); // FIXED
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = params;

    const reel = await prisma.reel.findUnique({ where: { id } });
    if (!reel) return NextResponse.json({ error: "Reel not found" }, { status: 404 });
    if (reel.authorId !== user.id)
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    await prisma.reel.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete reel error:", err);
    return NextResponse.json({ error: "Failed to delete reel" }, { status: 500 });
  }
}
