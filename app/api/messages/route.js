import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { chatId, content } = await req.json();
    if (!chatId || !content) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const chatExists = await prisma.chat.findFirst({
      where: {
        id: chatId,
        users: { some: { userId: user.id } }
      }
    });

    if (!chatExists) return NextResponse.json({ error: "Chat not found" }, { status: 403 });

    const msg = await prisma.message.create({
      data: { senderId: user.id, chatId, content }
    });

    return NextResponse.json(msg);

  } catch (err) {
    console.error("Send message error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
