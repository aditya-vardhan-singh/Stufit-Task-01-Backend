import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import { UnauthenticatedError } from "@/errors/unauthenticated.errors";
import { JWT_SECRET } from "@/libs";
import { prisma } from "@/libs";
import { User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

interface JwtPayload {
  userId: string;
}

export const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.cookies?.token ||
    req.headers.authorization?.replace("Bearer ", "") ||
    req.headers["x-access-token"];

  if (!token) {
    throw new UnauthenticatedError("Token not provided!");
  }

  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
  if (!decoded || !decoded.userId) {
    throw new UnauthenticatedError("Token not valid!");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.userId,
    },
  });

  if (!user) {
    throw new UnauthenticatedError("Unauthorized user not found");
  }

  req.user = user;
  next();
};
