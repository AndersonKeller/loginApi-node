import { Repository } from "typeorm";
import { iMonster, iMonsterCreate } from "../../interfaces/monster.interface";
import { Monster, Resistence, Spell, Stats } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnMonsterSchema } from "../../schemas/monster.schemas";

export async function createMonsterService(
  monsterData: iMonsterCreate
): Promise<iMonster> {
  const monsterRepository: Repository<Monster> =
    AppDataSource.getRepository(Monster);
  const resistenceRepository: Repository<Resistence> =
    AppDataSource.getRepository(Resistence);
  const spellsRepository: Repository<Spell> =
    AppDataSource.getRepository(Spell);
  const statsRepository: Repository<Stats> = AppDataSource.getRepository(Stats);

  const newStats: Stats = statsRepository.create(monsterData.stats);
  await statsRepository.save(newStats);
  const newRes = resistenceRepository.create(monsterData.resistence);
  await resistenceRepository.save(newRes);
  const newMonster: iMonsterCreate = {
    name: monsterData.name,
    resistence: newRes,
    stats: newStats,
  };
  const monster: Monster = monsterRepository.create(newMonster);
  await monsterRepository.save(monster);

  const returnMonster = returnMonsterSchema.parse(monster);
  return returnMonster;
}
