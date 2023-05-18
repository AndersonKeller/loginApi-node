import { z } from "zod";
import {
  createCharsStatsSchema,
  returnCharStatsSchema,
} from "../schemas/charStats.schemas";
import { DeepPartial } from "typeorm";
export type iCharStatsCreate = z.infer<typeof createCharsStatsSchema>;
export type iCharStats = z.infer<typeof returnCharStatsSchema>;
export type iCharStatsUpdate = DeepPartial<iCharStatsCreate>;
