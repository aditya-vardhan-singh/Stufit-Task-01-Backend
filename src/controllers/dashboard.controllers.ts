import { Request, Response } from "express";

export const getDashboard = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({ message: "Welcome to user dashboard" });
}
