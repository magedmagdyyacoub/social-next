import prisma from "@/lib/prisma";
import { getUserFromCookie } from "@/lib/auth";

export async function POST(req) {
  try {
    const user = await getUserFromCookie();
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const { requestId } = await req.json();

    // Get the friend request
    const friendRequest = await prisma.friendRequest.findUnique({
      where: { id: requestId },
    });

    if (!friendRequest) {
      return new Response(JSON.stringify({ error: "Request not found" }), { status: 404 });
    }

    // Update request status → ACCEPTED
    await prisma.friendRequest.update({
      where: { id: requestId },
      data: { status: "ACCEPTED" },
    });

    const userA = friendRequest.fromId;
    const userB = friendRequest.toId;

    // Create friendship BOTH ways (A → B) and (B → A)
    // Prevent duplicates with try/catch
    await prisma.friend.create({
      data: { userId: userA, friendId: userB },
    });

    await prisma.friend.create({
      data: { userId: userB, friendId: userA },
    });

    return new Response(
      JSON.stringify({ message: "Friend request accepted successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("ACCEPT FRIEND ERROR:", err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
