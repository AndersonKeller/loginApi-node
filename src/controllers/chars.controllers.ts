import { Request, Response } from "express";

import { createCharService } from "../services/chars/createChar.service";
import { iCharCreate } from "../interfaces/chars.interfaces";

export async function createCharControler(
  req: Request,
  res: Response
): Promise<Response> {
  const charData = req.body;
  const char: iCharCreate = await createCharService(charData);
  return res.status(201).json(char);
}
