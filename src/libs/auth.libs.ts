import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET, SALT_ROUNDS } from "./environment.libs";
import { UnauthenticatedError } from "@/errors";

// Hashing functions

export const comparePasswords = async (
  plainTextPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(plainTextPassword, hashedPassword);
};

export const hashPassword = async (
  plainTextPassword: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(plainTextPassword, salt);
};

// JWT functions

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "30d" });
};

export const passResetToken = (userId: string, email: string): string => {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string): boolean => {
  const verify = jwt.verify(token, JWT_SECRET);
  if (!verify) {
    throw new UnauthenticatedError("Invalid token");
  } else {
    return true;
  }
};
