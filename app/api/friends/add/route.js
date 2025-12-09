import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const user = await getUserFromCookie(req);   // FIXED
    if (!user) 
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

    const { friendId } = await req.json();

    // Check if already sent
    const existing = await prisma.friendRequest.findFirst({
      where: { fromId: user.id, toId: friendId }
    });

    if (existing)
      return new Response(JSON.stringify({ error: "Request already sent" }), { status: 400 });

    const request = await prisma.friendRequest.create({
      data: { fromId: user.id, toId: friendId }
    });

    return new Response(JSON.stringify({ request }), { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
