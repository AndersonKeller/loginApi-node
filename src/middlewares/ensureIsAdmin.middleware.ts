import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export async function ensureIsAdminMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const isAdmin: boolean = req.user.admin;

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
}
