import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function GET(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // Fetch all friends of the logged user
    const friends = await prisma.friend.findMany({
      where: { userId: user.id },
      include: {
        friend: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    return new Response(JSON.stringify({ friends }), { status: 200 });
  } catch (err) {
    console.error("FRIENDS LIST ERROR:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch friends" }), { status: 500 });
  }
}
