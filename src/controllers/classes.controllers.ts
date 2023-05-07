import { Request, Response } from "express";
import { createClassesService } from "../services/classes/createClasses.service";
export async function createClassesController(
  req: Request,
  res: Response
): Promise<Response> {
  const newClass = await createClassesService(req.body);
  return res.status(201).json(newClass);
}
