import { Request, Response } from "express";
import { createEquipService } from "../services/equips/createEquip.service";
import {
  iEquip,
  iEquipToChar,
  iEquipToCharCreate,
} from "../interfaces/equips.interfaces";
import { Equip } from "../entities";
import { getAllEquipsService } from "../services/equips/getAllEquips.service";
import { equipToCharService } from "../services/equips/equipToChar.service";

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
