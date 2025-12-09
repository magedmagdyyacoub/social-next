import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || "admin123", 10);

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@example.com" },
    update: {},
    create: {
      name: "Admin",
      email: process.env.ADMIN_EMAIL || "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin user seeded.");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
