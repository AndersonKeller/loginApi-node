import { Request, Response } from "express";
import { createMonsterService } from "../services/monster/createMonster.service";
import { iMonster, iMonsterSpell } from "../interfaces/monster.interface";
import { Monster } from "../entities";
import { getAllMonstersService } from "../services/monster/getAllMonsters.service";
import { createSpellToMonsterService } from "../services/monster/createSpellToMonster.service";

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
export async function createSpellToMonsterController(
  req: Request,
  res: Response
): Promise<Response> {
  const monsterId: number = parseInt(req.params.id);
  const spellData = req.body;
  const spells: iMonsterSpell = await createSpellToMonsterService(
    monsterId,
    spellData
  );
  return res.status(201).json(spells);
}
