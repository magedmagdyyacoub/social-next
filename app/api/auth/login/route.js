import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 401 });

    const cookie = serialize("token", user.id, { path: "/", httpOnly: true, sameSite: "strict" });
    console.log("Login user.id:", user.id);

    return new Response(JSON.stringify({ user }), {
      status: 200,
      headers: { "Set-Cookie": cookie, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Login error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
