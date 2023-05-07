import { Request, Response } from "express";
export async function createClassesController(
  req: Request,
  res: Response
): Promise<Response> {
  return res.status(201).send();
}
