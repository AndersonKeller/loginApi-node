import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { Classes, Race } from "../entities";

export async function ensureNameIsUnique(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  console.log(req.baseUrl);
  const classesRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const raceRepository: Repository<Race> = AppDataSource.getRepository(Race);

  if (req.baseUrl === "/classes") {
    const findClass: Classes | null = await classesRepository.findOneBy({
      name: req.body.name,
    });
    if (req.body.name) {
      if (findClass) {
        throw new AppError("Class already exists", 409);
      }
    }
  } else {
    const findRace: Race | null = await raceRepository.findOneBy({
      name: req.body.name,
    });
    if (req.body.name) {
      if (findRace) {
        throw new AppError("Race already exists", 409);
      }
    }
  }
  return next();
}
