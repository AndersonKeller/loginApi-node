import { Repository } from "typeorm";
import { iEquip, iEquipCreate } from "../../interfaces/equips.interfaces";
import { AppDataSource } from "../../data-source";
import { Equip } from "../../entities";
import { returnEquipSchema } from "../../schemas/equips.schemas";

export async function createEquipService(
  equipData: iEquipCreate
): Promise<iEquip> {
  const equipRepository: Repository<Equip> = AppDataSource.getRepository(Equip);

  const equip: Equip = equipRepository.create(equipData);
  await equipRepository.save(equip);
  const newEquip: iEquip = returnEquipSchema.parse(equip);
  return newEquip;
}
