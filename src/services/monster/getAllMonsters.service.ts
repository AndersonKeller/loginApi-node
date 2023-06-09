import { Repository } from "typeorm";
import { Monster } from "../../entities";
import { AppDataSource } from "../../data-source";

export async function getAllMonstersService(): Promise<Monster[]> {
  const monsterRepository: Repository<Monster> =
    AppDataSource.getRepository(Monster);

  const monsters: Array<Monster> = await monsterRepository.find({
    relations: {
      resistence: true,
      stats: true,
    },
  });

  return monsters;
}
