import { z } from "zod";
import {
  createScheduleSchema,
  scheduleNewSchema,
  scheduleSchema,
  schedulesSchemaReturn,
} from "../schemas/schedules.schemas";

export type iScheduleCreate = z.infer<typeof createScheduleSchema>;
export type iScheduleNew = z.infer<typeof scheduleNewSchema>;
export type iSchedule = z.infer<typeof scheduleSchema>;
export type iSchedulesReturn = z.infer<typeof schedulesSchemaReturn>;
