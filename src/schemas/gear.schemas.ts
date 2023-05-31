import { z } from "zod";
import { equipGearSchema, subType } from "./equips.schemas";

export const createCharGearSchema = z.object({
  helm: z.string().optional().nullable(),
  boots: z.string().optional().nullable(),
  belt: z.string().optional().nullable(),
  gloves: z.string().optional().nullable(),
  l_ring: z.string().optional().nullable(),
  r_ring: z.string().optional().nullable(),
  amulet: z.string().optional().nullable(),
  l_hand: z.string().optional().nullable(),
  r_hand: z.string().optional().nullable(),
  chest_plate: z.string().optional().nullable(),
});
export const returnGearSchema = createCharGearSchema.extend({
  id: z.number(),
});
