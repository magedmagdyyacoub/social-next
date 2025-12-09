import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const user = await getUserFromCookie();
    if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

    const { requestId } = await req.json();

    const request = await prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: "REJECTED" }
    });

    return new Response(JSON.stringify({ request }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
