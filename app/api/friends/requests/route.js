import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function GET(req) {
  try {
    const user = await getUserFromCookie(req);
    if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });

    const requests = await prisma.friendRequest.findMany({
      where: { toId: user.id, status: "PENDING" },
      include: { 
        from: { select: { id: true, name: true, email: true } } 
      },
      orderBy: { createdAt: "desc" }
    });

    const formatted = requests.map(r => ({
      id: r.id,
      fromId: r.fromId,
      fromName: r.from?.name || r.fromId,
      fromEmail: r.from?.email || "",
  
      createdAt: r.createdAt
    }));

    return new Response(JSON.stringify({ requests: formatted }), { status: 200 });

  } catch (err) {
    console.error("FRIEND REQUESTS ERROR:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
