import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // await cookies() عشان نفك الـ promise
    const allCookies = await cookies();
    const token = allCookies.get("token")?.value;

    if (!token) {
      return new Response(JSON.stringify({ user: null }), { status: 200 });
    }

    const user = await prisma.user.findUnique({ where: { id: token } });

    return new Response(JSON.stringify({ user: user || null }), { status: 200 });
  } catch (err) {
    console.error("Error /api/auth/me:", err);
    return new Response(JSON.stringify({ user: null, error: "Server error" }), { status: 500 });
  }
}
