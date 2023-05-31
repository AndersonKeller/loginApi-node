import { Repository } from "typeorm";
import { iCharGear, iCharGearCreate } from "../../interfaces/gear.interfaces";
import { Char, Equip, Gear } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnGearSchema } from "../../schemas/gear.schemas";
import { subType } from "../../schemas/equips.schemas";
import { AppError } from "../../errors";

export async function createCharGearService(
  charId: number,
  gearData: iCharGearCreate
): Promise<any> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const gearRepository: Repository<Gear> = AppDataSource.getRepository(Gear);
  const equipRepository: Repository<Equip> = AppDataSource.getRepository(Equip);
  const charFind = await charRepository.findOne({
    where: {
      id: charId,
    },
  });
  const amuletFind: Equip | null = await equipRepository.findOne({
    where: {
      name: gearData.amulet!,
      subtype: subType.amulet,
    },
  });
  if (!amuletFind) {
    throw new AppError("amulet not found");
  }
  const gear: Gear = gearRepository.create({
    amulet: amuletFind!,
    char: charFind!,
  });
  await gearRepository.save(gear);
  //const gearNew = returnGearSchema.parse(gear);
  return gear;
}
