import { z } from "zod";
import { createTypeSchema, returnTypeSchema } from "../schemas/types.schemas";

export type iTypeCreate = z.infer<typeof createTypeSchema>;
export type iType = z.infer<typeof returnTypeSchema>;
