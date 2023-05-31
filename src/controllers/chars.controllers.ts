import { Request, Response } from "express";

import { createCharService } from "../services/chars/createChar.service";
import { iChar, iCharSpell, iMyChars } from "../interfaces/chars.interfaces";
import { getCharsService } from "../services/chars/getChars.service";
import { getCharService } from "../services/chars/getChar.service";
import { updateCharStatsService } from "../services/chars/updateCharStats.service";
import { iCharStatsUpdate } from "../interfaces/charStats.interfaces";

import {
  iResistence,
  iUpdateResistence,
} from "../interfaces/resistence.interfaces";
import { createCharSpellService } from "../services/chars/createCharSpell.service";
import { updateResistenceService } from "../services/chars/updateResistence.servicce";
import { getSpellsByCharService } from "../services/chars/getSpellsByChar.service";
import { CharSpells } from "../entities";
import { removeCharService } from "../services/chars/removeChar.service";
import { createCharGearService } from "../services/chars/createCharGear.service";
import { iCharGear } from "../interfaces/gear.interfaces";

export async function createCharControler(
  req: Request,
  res: Response
): Promise<Response> {
  const charData = req.body;
  charData.user = req.user;
  const char: iChar = await createCharService(charData, req.user.id);
  return res.status(201).json(char);
}
export async function getCharsController(
  req: Request,
  res: Response
): Promise<Response> {
  const id: number = req.user.id;
  const chars: iMyChars = await getCharsService(id);
  return res.status(200).json(chars);
}
export async function getCharController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId = parseInt(req.params.id);
  const char = await getCharService(charId);
  return res.status(200).json(char);
}
export async function updateCharStatsController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId = parseInt(req.params.id);
  const statsData = req.body;
  const char: iCharStatsUpdate = await updateCharStatsService(
    statsData,
    charId
  );
  return res.status(200).json(char);
}
export async function updateResistenceController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId = parseInt(req.params.id);
  const resistenceData = req.body;
  const resistence: iUpdateResistence = await updateResistenceService(
    charId,
    resistenceData
  );
  return res.status(200).json(resistence);
}
export async function createCharSpellController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId = parseInt(req.params.id);
  const spelldata = req.body;
  const spell: iCharSpell = await createCharSpellService(charId, spelldata);
  return res.status(201).json(spell);
}
export async function getSpellsByCharController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId: number = parseInt(req.params.id);
  const spells: CharSpells[] = await getSpellsByCharService(charId);
  return res.status(200).json(spells);
}
export async function removeCharController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId: number = parseInt(req.params.id);
  await removeCharService(charId);
  return res.status(204).send();
}
export async function getCharGearController(
  req: Request,
  res: Response
): Promise<Response> {
  return res.status(200).json();
}
export async function createCharGearController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId: number = parseInt(req.params.id);
  const gearData = req.body;
  const gear: iCharGear = await createCharGearService(charId, gearData);
  return res.status(200).json(gear);
}
