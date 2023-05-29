import { z } from "zod";
import {
  createMonsterSchema,
  returnMonsterSchema,
} from "../schemas/monster.schemas";

export type iMonsterCreate = z.infer<typeof createMonsterSchema>;
export type iMonster = z.infer<typeof returnMonsterSchema>;
