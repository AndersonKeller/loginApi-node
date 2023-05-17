import { z } from "zod";

enum equipType {
  weapon = "WEAPON",
  armor = "ARMOR",
}
export const createEquipSchema = z.object({
  name: z.string().max(52),
  type: z.nativeEnum(equipType),
  description: z.string().optional().default(""),
  damageMin: z.number().optional().default(0),
  damageMax: z.number().optional().default(0),
  armor: z.number().optional().default(0),
  magicMin: z.number().optional().default(0),
  magicMax: z.number().optional().default(0),
  weigth: z.number(),
});
export const returnEquipSchema = createEquipSchema.extend({
  id: z.number(),
});
