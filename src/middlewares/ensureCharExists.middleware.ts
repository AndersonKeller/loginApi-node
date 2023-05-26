import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Char } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export async function ensureCharExistsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);

  const charFind: Char | null = await charRepository.findOneBy({
    id: parseInt(req.params.id),
  });
  if (!charFind) {
    throw new AppError("Char whit id not exists", 404);
  }
  return next();
}
