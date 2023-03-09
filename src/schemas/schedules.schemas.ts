import { z } from "zod";

export const createScheduleSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().optional(),
});
export const scheduleNewSchema = createScheduleSchema.extend({
  userId: z.number().optional(),
});
export const scheduleSchema = scheduleNewSchema.extend({
  id: z.number(),
});
export const schedulesSchemaReturn = scheduleSchema.array();
