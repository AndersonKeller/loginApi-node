import { z } from "zod";
import { returnCharSchema } from "./chars.schemas";

export enum equipType {
  weapon = "WEAPON",
  armor = "ARMOR",
  acessorie = "ACESSORIE",
}
export enum subType {
  one_hand = "ONE HAND",
  two_hands = "TWO HANDS",
  ring = "RING",
  belt = "BELT",
  boots = "BOOTS",
  helm = "HELM",
  shield = "'SHIELD",
  chest_plate = "CHEST PLATE",
  gloves = "GLOVES",
  amulet = "AMULET",
}
export const createEquipSchema = z.object({
  name: z.string().max(52),
  type: z.nativeEnum(equipType),
  subtype: z.nativeEnum(subType),
  description: z.string().optional().default(""),
  damageMin: z.number().optional().default(0),
  damageMax: z.number().optional().default(0),
  armor: z.number().optional().default(0),
  magicMin: z.number().optional().default(0),
  magicMax: z.number().optional().default(0),
  weigth: z.number(),
  cost: z.number(),
});
export const returnEquipSchema = createEquipSchema.extend({
  id: z.number(),
});
export const equipToCharSchema = z.object({
  name: z.string(),
});
export const returnEquipToCharSchema = z.object({
  id: z.number(),
  char: z.string(),
  equip: returnEquipSchema,
});
