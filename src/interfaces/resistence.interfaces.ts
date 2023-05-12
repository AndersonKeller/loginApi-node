import { z } from "zod";
import {
  createResistenceSchema,
  returnResistenceSchema,
} from "../schemas/resistence.schemas";

export type iResistenceCreate = z.infer<typeof createResistenceSchema>;
export type iResistence = z.infer<typeof returnResistenceSchema>;
