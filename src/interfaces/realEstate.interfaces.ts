import { z } from "zod";
import {
  addressSchema,
  createAddressSchema,
  createRealEstateSchema,
  realEstateSchema,
  realEstatesSchema,
} from "../schemas/realEstate.schemas";

export type iRealEstateCreate = z.infer<typeof createRealEstateSchema>;
export type iRealEstate = z.infer<typeof realEstateSchema>;
export type iRealEstates = z.infer<typeof realEstatesSchema>;
export type iAddressCreate = z.infer<typeof createAddressSchema>;
export type iAddress = z.infer<typeof addressSchema>;
