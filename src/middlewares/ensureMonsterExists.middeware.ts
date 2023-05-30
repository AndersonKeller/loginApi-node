import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Monster } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export async function ensureMonsterExistsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const monsterRepository: Repository<Monster> =
    AppDataSource.getRepository(Monster);
  const monsterFind: Monster | null = await monsterRepository.findOneBy({
    id: parseInt(req.params.id),
  });
  if (!monsterFind) {
    throw new AppError("Monster not found", 404);
  }
  return next();
}
