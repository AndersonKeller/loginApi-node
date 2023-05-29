import { Request, Response } from "express";
import { createMonsterService } from "../services/monster/createMonster.service";
import { iMonster } from "../interfaces/monster.interface";
import { Monster } from "../entities";
import { getAllMonstersService } from "../services/monster/getAllMonsters.service";

export async function createMonsterController(
  req: Request,
  res: Response
): Promise<Response> {
  const monsterData = req.body;
  const monster: iMonster = await createMonsterService(monsterData);
  return res.status(201).json(monster);
}
export async function getAllMonstersController(
  req: Request,
  res: Response
): Promise<Response> {
  const monsters: Monster[] = await getAllMonstersService();
  return res.status(200).json(monsters);
}
