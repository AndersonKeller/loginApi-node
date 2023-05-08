import { Request, Response } from "express";

import { createCharService } from "../services/chars/createChar.service";
import { iChar } from "../interfaces/chars.interfaces";

export async function createCharControler(
  req: Request,
  res: Response
): Promise<Response> {
  const charData = req.body;
  charData.user = req.user;
  const char: iChar = await createCharService(charData, req.user.id);
  return res.status(201).json(char);
}
