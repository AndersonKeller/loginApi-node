import { Request, Response } from "express";
import { iRealEstates } from "../interfaces/realEstate.interfaces";
import { iScheduleCreate } from "../interfaces/schedules.interfaces";
import { createSchedulesService } from "../services/schedules/createSchedules.service";
import { listSchedulesByRealEsatetService } from "../services/schedules/listSchedulesByRealEstate.service";

export async function createSchedulesController(
  req: Request,
  res: Response
): Promise<Response> {
  const scheduleData = req.body;
  const id = req.user.id;
  const newSchedule = await createSchedulesService({
    scheduleData,
    userId: id,
  });
  return res.status(201).json(newSchedule);
}
export async function listScheduleByRealEstateController(
  req: Request,
  res: Response
): Promise<Response> {
  const scheduleId: number = parseInt(req.params.id);
  const schedules = await listSchedulesByRealEsatetService(scheduleId);
  return res.status(200).json(schedules);
}
