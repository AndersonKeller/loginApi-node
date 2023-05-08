import { Request, Response } from "express";
import { createRacesService } from "../services/races/createRaces.service";
import { getAllRacesService } from "../services/races/getAllRaces.service";
export async function createRacesController(
  req: Request,
  res: Response
): Promise<Response> {
  const newRace = await createRacesService(req.body);
  return res.status(201).json(newRace);
}
export async function getAllRacesController(
  req: Request,
  res: Response
): Promise<Response> {
  const races = await getAllRacesService();
  return res.status(200).json(races);
}
