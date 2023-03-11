import { z } from "zod";
import {
  createScheduleSchema,
  scheduleSchema,
  scheduleSchemaWhitUser,
  schedulesSchemaReturn,
} from "../schemas/schedules.schemas";

export type iScheduleCreate = z.infer<typeof createScheduleSchema>;
export type iSchedule = z.infer<typeof scheduleSchema>;
export type iScheduleWhitUser = z.infer<typeof scheduleSchemaWhitUser>;
export type iSchedulesReturn = z.infer<typeof schedulesSchemaReturn>;
