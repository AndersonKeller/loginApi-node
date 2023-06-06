import { Repository } from "typeorm";
import { Char, Gear } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iCharGear } from "../../interfaces/gear.interfaces";
import { getRandomValues } from "crypto";
import { iChar } from "../../interfaces/chars.interfaces";
import { returnGearSchema } from "../../schemas/gear.schemas";

export async function getCharGearservice(charId: number): Promise<Gear> {
  const gearRepository: Repository<Gear> = AppDataSource.getRepository(Gear);
  const charRepostory: Repository<Char> = AppDataSource.getRepository(Char);
  const findChar: any = await charRepostory.findOne({
    where: {
      id: charId,
    },
  });

  const findGear: Gear | null = await gearRepository.findOne({
    where: {
      char: findChar!,
    },
    relations: {
      amulet: true,
      belt: true,
      boots: true,
      chest_plate: true,
      gloves: true,
      helm: true,
      l_hand: true,
      l_ring: true,
      r_hand: true,
      r_ring: true,
    },
  });

  return findGear!;
}
