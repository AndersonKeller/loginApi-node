import { z } from "zod";
import {
  createResistenceSchema,
  returnResistenceSchema,
  updateResistnceSchema,
} from "../schemas/resistence.schemas";
import { DeepPartial } from "typeorm";

export type iResistenceCreate = z.infer<typeof createResistenceSchema>;
export type iResistence = z.infer<typeof returnResistenceSchema>;
export type updateResistence = z.infer<typeof updateResistnceSchema>;
export type iUpdateResistence = DeepPartial<updateResistence>;
