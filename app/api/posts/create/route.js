import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { getUserFromCookie } from "@/lib/auth";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const user = await getUserFromCookie();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const form = await req.formData();
    const name = form.get("name");
    const bio = form.get("bio");
    const image = form.get("image");

    let imageUrl = null;

    // رفع الصورة على Cloudinary
    if (image && typeof image === "object") {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ folder: "profiles" }, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }).end(buffer);
      });

      imageUrl = uploadResult.secure_url;
    }

    // تحديث بيانات المستخدم
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        name,
        bio,
        ...(imageUrl && { image: imageUrl }),
      },
    });

    return NextResponse.json({ user: updatedUser });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
