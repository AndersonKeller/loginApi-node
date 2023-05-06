import { z } from "zod";
import { charSchema, createCharSchema } from "../schemas/chars.schemas";

export type iCharCreate = z.infer<typeof createCharSchema>;
export type iChar = z.infer<typeof charSchema>;
