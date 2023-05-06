import { z } from "zod";
import { createCharSchema } from "../schemas/chars.schemas";

export type iCharCreate = z.infer<typeof createCharSchema>;
