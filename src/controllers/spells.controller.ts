import { Request, Response } from "express";
import { iSpell } from "../interfaces/spells.interfaces";
import { createSpellService } from "../services/spells/createSpell.service";
import { getAllSpellsService } from "../services/spells/getAllSpells.service";

export async function createSpellController(
  req: Request,
  res: Response
): Promise<Response> {
  const spellData = req.body;
  const spell: iSpell = await createSpellService(spellData);
  return res.status(200).json(spell);
}
export async function getAllSpellsControler(
  req: Request,
  res: Response
): Promise<Response> {
  const spells: any = await getAllSpellsService();
  return res.status(200).json(spells);
}
