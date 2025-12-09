import { cookies } from "next/headers";
import prisma from "./prisma";

// هذه الدالة ترجع بيانات المستخدم من الـ cookie
export async function getUserFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const user = await prisma.user.findUnique({
    where: { id: token },
  });

  return user;
}
