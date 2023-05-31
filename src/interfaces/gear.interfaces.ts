import { z } from "zod";
import {
  createCharGearSchema,
  returnGearSchema,
} from "../schemas/gear.schemas";

export type iCharGearCreate = z.infer<typeof createCharGearSchema>;
export type iCharGear = z.infer<typeof returnGearSchema>;
