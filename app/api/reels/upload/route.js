import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import ffmpeg from "fluent-ffmpeg";
import ffmpegStatic from "ffmpeg-static";
import path from "path";

ffmpeg.setFfmpegPath(ffmpegStatic);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const file = formData.get("video");
    const userId = formData.get("userId");
    const caption = formData.get("caption") || "";

    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const originalPath = path.join(uploadDir, `${Date.now()}-${file.name}`);
    const compressedPath = path.join(uploadDir, `compressed-${Date.now()}.mp4`);

    // Save original temporarily
    await writeFile(originalPath, buffer);

    // Compress video
    await new Promise((resolve, reject) => {
      ffmpeg(originalPath)
        .outputOptions([
          "-vcodec libx264",
          "-crf 28",
          "-preset veryfast",
        ])
        .save(compressedPath)
        .on("end", resolve)
        .on("error", reject);
    });

    // Save to DB (only compressed)
    const reel = await prisma.reel.create({
      data: {
        video: `/uploads/${path.basename(compressedPath)}`,
        caption,
        authorId: userId,
      },
    });

    return NextResponse.json({ success: true, reel });
  } catch (err) {
    console.log("Upload reel error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
