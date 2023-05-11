import { z } from "zod";
import { createStatsSchema, statsSchema } from "../schemas/stats.schemas";

export type iStatsCreate = z.infer<typeof createStatsSchema>;
export type iStats = z.infer<typeof statsSchema>;
