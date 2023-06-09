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
  const charFind: any = await charRepository.findOne({
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
  const helmFind: Equip | null = await equipRepository.findOne({
    where: {
      name: gearData.helm!,
      subtype: subType.helm,
    },
  });
  if (gearData.helm && !helmFind) {
    throw new AppError("Helm not found");
  }
  const gearFind: Gear | null = await gearRepository.findOne({
    where: {
      char: charFind!,
    },
  });
  console.log(gearData);
  const gear: any = {
    ...gearFind,
    amulet: amuletFind,
  };
  const newGear: any = gearRepository.create({
    ...gearFind,
    amulet: amuletFind ? amuletFind : gearFind?.amulet!,
    helm: helmFind ? helmFind : gearFind?.helm!,
  });
  await gearRepository.save(newGear);
  //const gearNew = returnGearSchema.parse(newGear);
  return newGear;
}
