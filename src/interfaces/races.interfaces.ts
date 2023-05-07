import { z } from "zod";
import { createRaceSchema, raceSchema } from "../schemas/races.schemas";

export type iRacecreate = z.infer<typeof createRaceSchema>;
export type iRace = z.infer<typeof raceSchema>;
