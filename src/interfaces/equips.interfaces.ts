import { z } from "zod";
import {
  createEquipSchema,
  equipToCharSchema,
  returnEquipSchema,
  returnEquipToCharSchema,
} from "../schemas/equips.schemas";

export type iEquipCreate = z.infer<typeof createEquipSchema>;
export type iEquip = z.infer<typeof returnEquipSchema>;
export type iEquipToCharCreate = z.infer<typeof equipToCharSchema>;
export type iEquipToChar = z.infer<typeof returnEquipToCharSchema>;
