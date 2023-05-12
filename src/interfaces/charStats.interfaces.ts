import { z } from "zod";
import {
  createCharsStatsSchema,
  returnCharStatsSchema,
} from "../schemas/charStats.schemas";
export type iCharStatsCreate = z.infer<typeof createCharsStatsSchema>;
export type iCharStats = z.infer<typeof returnCharStatsSchema>;
