import e, { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { loginSchema } from "@/libs";
import { BadRequestError } from "@/errors";

export const loginValidaton = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessages = result.error.errors
      .map((err) => err.message)
      .join(". ");
    throw new BadRequestError(errorMessages);
  }

  req.body = result.data;
  next();
};
