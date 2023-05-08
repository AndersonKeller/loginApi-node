import { Request, Response } from "express";
import { createClasseService } from "../services/classes/createClasse.service";
import { iClassesCreate } from "../interfaces/classes.interfaces";
export async function createClassesController(
  req: Request,
  res: Response
): Promise<Response> {
  const classeData: iClassesCreate = req.body;
  const newClasse = await createClasseService(classeData);
  return res.status(201).json(newClasse);
}
