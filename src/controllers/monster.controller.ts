import { Request, Response } from "express";
import { createMonsterService } from "../services/monster/createMonster.service";
import { iMonster } from "../interfaces/monster.interface";

export async function createMonsterController(
  req: Request,
  res: Response
): Promise<Response> {
  const monsterData = req.body;
  const monster: iMonster = await createMonsterService(monsterData);
  return res.status(201).json(monster);
}
