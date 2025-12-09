import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { writeFile } from "fs/promises";
import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    // نفس نظام posts/create EXACTLY
    const user = await getUserFromCookie();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const form = await req.formData();
    const name = form.get("name");
    const bio = form.get("bio");
    const image = form.get("image");

    let imageUrl = null;

    // حفظ الصورة
    if (image && typeof image === "object") {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `profile_${Date.now()}_${image.name}`;
      await writeFile(`public/uploads/${fileName}`, buffer);
      imageUrl = `/uploads/${fileName}`;
    }

    // تحديث البيانات
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
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}
