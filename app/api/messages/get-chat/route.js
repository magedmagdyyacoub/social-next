import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { friendId } = await req.json();

    let chat = await prisma.chat.findFirst({
      where: {
        users: { every: { userId: { in: [user.id, friendId] } } }
      },
      include: { users: true }
    });

    if (!chat) {
      chat = await prisma.chat.create({
        data: { users: { create: [{ userId: user.id }, { userId: friendId }] } },
        include: { users: true }
      });
    }

    return NextResponse.json({ chatId: chat.id });
  } catch (err) {
    console.error("CHAT ERROR:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
