import { z } from "zod";
import {
  createCharsStatsSchema,
  returnCharStatsSchema,
  updateCharStatsSchema,
} from "../schemas/charStats.schemas";
import { DeepPartial } from "typeorm";
export type iCharStatsCreate = z.infer<typeof createCharsStatsSchema>;
export type iCharStats = z.infer<typeof returnCharStatsSchema>;
export type CharStatsUpdate = z.infer<typeof updateCharStatsSchema>;
export type iCharStatsUpdate = DeepPartial<CharStatsUpdate>;
