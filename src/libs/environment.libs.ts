import dotenv from "dotenv";
dotenv.config();

export const PORT: number = parseInt(process.env.PORT!);
if (!PORT) {
  throw new Error("PORT is not defined in environment variables");
}

export const JWT_SECRET: string = process.env.JWT_SECRET!;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}

export const DATABASE_URL: string = process.env.DATABASE_URL!;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in the environment variables");
}

export const FRONTEND_URL: string = process.env.FRONTEND_URL!;
if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL is not defined in the environment variables");
}

export const ADMIN_EMAIL: string = process.env.ADMIN_EMAIL!;
if (!ADMIN_EMAIL) {
  throw new Error("ADMIN_EMAIL is not defined in the environment variables");
}

export const ADMIN_PASSWORD: string = process.env.ADMIN_PASSWORD!;
if (!ADMIN_PASSWORD) {
  throw new Error("ADMIN_PASSWORD is not defined in the environment variables");
}

export const MAILER_EMAIL: string = process.env.MAILER_EMAIL!;
if (!MAILER_EMAIL) {
  throw new Error("MAILER_EMAIL is not defined in the environment variables");
}

export const MAILER_PASSWORD: string = process.env.MAILER_PASSWORD!;
if (!MAILER_PASSWORD) {
  throw new Error(
    "MAILER_PASSWORD is not defined in the environment variables"
  );
}

export const SALT_ROUNDS: number = parseInt(process.env.SALT_ROUNDS!);
if (!SALT_ROUNDS) {
  throw new Error("SALT_ROUNDS is not defined in the environment variables");
}
