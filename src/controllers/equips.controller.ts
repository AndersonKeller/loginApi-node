import { Request, Response } from "express";
import { createEquipService } from "../services/equips/createEquip.service";
import { iEquip } from "../interfaces/equips.interfaces";

export async function createEquipController(
  req: Request,
  res: Response
): Promise<Response> {
  const equipData = req.body;
  const equip: iEquip = await createEquipService(equipData);
  return res.status(201).json(equip);
}
