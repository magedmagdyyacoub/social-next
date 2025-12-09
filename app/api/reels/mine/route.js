// app/api/reels/mine/route.js
import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function GET(req) {
  try {
    const user = await getUserFromCookie();

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }

    const reels = await prisma.reel.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        likes: true,                // include likes
        comments: {                 // include comments
          include: {
            author: true,           // include comment author
            likes: true             // include likes on comment
          },
        },
      },
    });

    return new Response(JSON.stringify({ reels }), {
      status: 200,
    });
  } catch (error) {
    console.error("Get my reels error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
