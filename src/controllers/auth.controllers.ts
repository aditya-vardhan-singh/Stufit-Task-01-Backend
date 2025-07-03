import { Request, Response } from "express";
import { NotFoundError } from "@/errors";
import {
  comparePasswords,
  fetchUser,
  FRONTEND_URL,
  generateToken,
  hashPassword,
  passResetToken,
  sendResetMail,
  updatePassword,
  verifyToken,
} from "@/libs";
import { StatusCodes } from "http-status-codes";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await fetchUser(email);

  if (!(await comparePasswords(password, user.password))) {
    throw new NotFoundError("Invalid email or password");
  }

  const token = generateToken(user.id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    path: "/",
  });
  res.status(StatusCodes.OK).json({ message: "Login successful" });
};

export const requestPasswordReset = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await fetchUser(email);

  const token = passResetToken(user.id, email);
  const resetUrl = `${FRONTEND_URL}/resetPassword/${user.id}/${token}`;
  await sendResetMail(email, resetUrl);

  res.status(StatusCodes.OK).json({ message: "Password reset link sent" });
};

export const passwordReset = async (req: Request, res: Response) => {
  const {
    params: { id, token },
    body: { password },
  } = req;

  const user = await fetchUser(id);

  if (verifyToken(token)) {
    const hashedPassword = await hashPassword(password);
    updatePassword(user.id, hashedPassword);
    res
      .status(StatusCodes.OK)
      .json({ message: "Password updated successfully" });
  }
};
