import { z } from "zod";
import {
  createEquipSchema,
  returnEquipSchema,
} from "../schemas/equips.schemas";

export type iEquipCreate = z.infer<typeof createEquipSchema>;
export type iEquip = z.infer<typeof returnEquipSchema>;
