import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function GET(req, { params }) {
  const user = await getUserFromCookie(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { friendId } = params;

  // هل فيه شات موجود بين الاتنين؟
  let chat = await prisma.chat.findFirst({
    where: {
      users: {
        some: { userId: user.id }
      },
      AND: {
        users: {
          some: { userId: friendId }
        }
      }
    },
    include: { users: true }
  });

  // لو مفيش → نعمل واحد
  if (!chat) {
    chat = await prisma.chat.create({
      data: {
        users: {
          create: [
            { userId: user.id },
            { userId: friendId }
          ]
        }
      },
      include: { users: true }
    });
  }

  return NextResponse.json(chat);
}
