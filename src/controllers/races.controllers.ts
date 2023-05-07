import { Request, Response } from "express";
import { createRacesService } from "../services/races/createRaces.service";
export async function createRacesController(
  req: Request,
  res: Response
): Promise<Response> {
  const newClass = await createRacesService(req.body);
  return res.status(201).json(newClass);
}
