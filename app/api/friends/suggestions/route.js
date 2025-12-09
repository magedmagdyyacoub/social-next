import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function GET(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // جلب 9 مستخدمين عشوائيين بدون المستخدم الحالي
    const users = await prisma.user.findMany({
      where: { id: { not: user.id } },
      take: 9,
    });

    return NextResponse.json({ users });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch suggestions" }, { status: 500 });
  }
}
