import { Repository } from "typeorm";
import { Equip } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function getAllEquipsService(): Promise<Equip[]> {
  const equipRepository: Repository<Equip> = AppDataSource.getRepository(Equip);
  const equips: Array<Equip> = await equipRepository.find();
  return equips;
}
