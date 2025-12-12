import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function GET(req) {
  try {
    const user = await getUserFromCookie(req); // ✅ required

    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const reels = await prisma.reel.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        likes: true,
        comments: {
          include: {
            author: true,
            likes: true,
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return new Response(JSON.stringify({ reels }), { status: 200 });
  } catch (error) {
    console.error("Get my reels error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
