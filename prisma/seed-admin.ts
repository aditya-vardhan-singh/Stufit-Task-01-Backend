// import { PrismaClient } from "../src/generated/prisma";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!;
if (!ADMIN_EMAIL) {
  throw new Error("ADMIN_EMAIL is not set in the environment variables");
}
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
if (!ADMIN_PASSWORD) {
  throw new Error("ADMIN_PASSWORD is not set in the environment variables");
}

const prisma = new PrismaClient();

async function main() {
  const adminEmail = ADMIN_EMAIL;
  const adminPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: "Admin",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  console.log("Seeded admin user:", admin);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
