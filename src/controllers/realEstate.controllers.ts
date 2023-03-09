import { Request, response, Response } from "express";
import {
  iAddressCreate,
  iRealEstate,
  iRealEstateCreate,
} from "../interfaces/realEstate.interfaces";
import { createRealEstateService } from "../services/realEstate/createRealEstate.service";
import { listRealStatesService } from "../services/realEstate/listRealEstates.service";
export async function createRealEstateController(
  req: Request,
  res: Response
): Promise<Response> {
  const addressData: iAddressCreate = req.body.address;

  const realEstateData: iRealEstateCreate = {
    value: req.body.value,
    sold: req.body.sold,
    size: req.body.size,
    category: req.body.category,
  };

  const newEstate = await createRealEstateService(realEstateData, addressData);

  return res.status(201).json(newEstate);
}
export async function listRealStatesController(
  req: Request,
  res: Response
): Promise<Response> {
  const realStates = await listRealStatesService();
  return res.status(200).json(realStates);
}
