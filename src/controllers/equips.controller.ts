import { Request, Response } from "express";
import { createEquipService } from "../services/equips/createEquip.service";
import {
  iEquip,
  iEquipToChar,
  iEquipToCharCreate,
} from "../interfaces/equips.interfaces";
import { CharEquips, Equip } from "../entities";
import { getAllEquipsService } from "../services/equips/getAllEquips.service";
import { equipToCharService } from "../services/equips/equipToChar.service";
import { removeEquipToCharService } from "../services/equips/removeEquipToChar.service";
import { getEquipsByCharService } from "../services/equips/getEquipsByChar.service";

export async function createEquipController(
  req: Request,
  res: Response
): Promise<Response> {
  const equipData = req.body;
  const equip: iEquip = await createEquipService(equipData);
  return res.status(201).json(equip);
}
export async function getAllEquipsController(
  req: Request,
  res: Response
): Promise<Response> {
  const equips: Array<Equip> = await getAllEquipsService();
  return res.status(200).json(equips);
}
export async function equipToCharController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId: number = parseInt(req.params.id);
  const equipData: iEquipToCharCreate = req.body;
  const equipChar: iEquipToChar = await equipToCharService(charId, equipData);
  return res.status(200).json(equipChar);
}
export async function removeEquipToCharController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId: number = parseInt(req.params.id);
  const equipCharId: number = parseInt(req.params.equip);
  console.log(equipCharId);
  await removeEquipToCharService(charId, equipCharId);
  return res.status(204).send();
}
export async function getEquipsByCharController(
  req: Request,
  res: Response
): Promise<Response> {
  const charId: number = parseInt(req.params.id);
  const equips: CharEquips[] = await getEquipsByCharService(charId);
  return res.status(200).json(equips);
}
