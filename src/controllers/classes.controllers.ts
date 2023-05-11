import { Request, Response } from "express";
import { createClasseService } from "../services/classes/createClasse.service";
import { iClassesCreate } from "../interfaces/classes.interfaces";
import { getAllClassesService } from "../services/classes/getAllClasses.service";
export async function createClassesController(
  req: Request,
  res: Response
): Promise<Response> {
  const classeData: iClassesCreate = req.body;
  const newClasse = await createClasseService(classeData);
  return res.status(201).json(newClasse);
}
export async function getAllClassesController(
  req: Request,
  res: Response
): Promise<Response> {
  const classes = await getAllClassesService();
  return res.status(200).json(classes);
}
