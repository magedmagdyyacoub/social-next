import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const caption = formData.get("caption");
    const video = formData.get("video");

    if (!video) return NextResponse.json({ error: "Video required" }, { status: 400 });

    const buffer = Buffer.from(await video.arrayBuffer());
    const fileName = `reel_${Date.now()}_${video.name}`;
    await writeFile(`public/uploads/${fileName}`, buffer);
    const videoUrl = `/uploads/${fileName}`;

    const reel = await prisma.reel.create({
      data: { caption, video: videoUrl, authorId: user.id },
    });

    return NextResponse.json({ reel });
  } catch (err) {
    console.error("Create reel error:", err);
    return NextResponse.json({ error: "Failed to create reel" }, { status: 500 });
  }
}
