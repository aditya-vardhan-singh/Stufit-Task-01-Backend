// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import { PrismaClient, User } from "@/generated/prisma";
// import { Request, Response, NextFunction } from "express";
// import { UnauthenticatedError } from "@/errors/unauthenticated.errors";

// dotenv.config();
// const JWT_SECRET = process.env.JWT_SECRET;

// if (!JWT_SECRET) {
//   throw new Error("JWT_SECRET is not defined in environment variables!");
// }

// const prisma = new PrismaClient();

// declare global {
//   namespace Express {
//     interface Request {
//       user?: User;
//     }
//   }
// }

// interface JwtPayload {
//   userID: string;
// }

// export const protectRoute = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.cookies.jwt;

//   if (!token) {
//     throw new UnauthenticatedError("Token not provided!");
//   }

//   const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
//   if (!decoded) {
//     throw new UnauthenticatedError("Token not valid!");
//   }

//   // Find user
//   const user = await prisma.user.findUnique({
//     where: {
//       id: decoded.userID,
//     },
//   });

//   if (!user) {
//     return res.status(400).json({ message: "Unauthorized user not found" });
//   }

//   req.user = user;
//   next();
// };
