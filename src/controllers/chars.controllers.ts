import { Request, Response } from "express";

import { createCharService } from "../services/chars/createChar.service";
import { iChar, iMyChars } from "../interfaces/chars.interfaces";
import { getCharsService } from "../services/chars/getChars.service";

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
