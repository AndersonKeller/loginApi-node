import { z } from "zod";
import { createCharSchema, returnCharSchema } from "../schemas/chars.schemas";

export type iCharCreate = z.infer<typeof createCharSchema>;
export type iChar = z.infer<typeof returnCharSchema>;
