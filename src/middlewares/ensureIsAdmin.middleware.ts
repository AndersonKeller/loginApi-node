import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export async function ensureIsAdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const isAdmin = req.user.admin;
  if (!isAdmin) {
    throw new AppError("Insufficient Permission", 403);
  }
  return next();
}
