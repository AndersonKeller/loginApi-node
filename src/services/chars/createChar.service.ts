import {
  iCharStats,
  iCharStatsCreate,
} from "./../../interfaces/charStats.interfaces";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  Char,
  CharStats,
  Classes,
  Race,
  Resistence,
  Stats,
  User,
} from "../../entities";
import { iChar, iCharCreate } from "../../interfaces/chars.interfaces";
import { iClasse } from "../../interfaces/classes.interfaces";
import { AppError } from "../../errors";
import { iRace } from "../../interfaces/races.interfaces";
import { returnCharSchema } from "../../schemas/chars.schemas";
import { iResistenceCreate } from "../../interfaces/resistence.interfaces";

export async function createCharService(
  charData: iCharCreate,
  idUser: number
): Promise<any> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const classesRepository: Repository<Classes> =
    AppDataSource.getRepository(Classes);
  const raceRepository: Repository<Race> = AppDataSource.getRepository(Race);
  const statsRepository: Repository<CharStats> =
    AppDataSource.getRepository(CharStats);
  const resistenceRepository: Repository<Resistence> =
    AppDataSource.getRepository(Resistence);
  const user: User | null = await userRepository.findOneBy({ id: idUser });

  const classesFind: iClasse | null = await classesRepository.findOne({
    where: {
      name: charData.classe,
    },
    relations: {
      stats: true,
    },
  });
  if (!classesFind) {
    throw new AppError("Class not find", 404);
  }
  const raceFind: iRace | null = await raceRepository.findOne({
    where: {
      name: charData.race,
    },
    relations: {
      stats: true,
    },
  });
  if (!raceFind) {
    throw new AppError("Race not find", 404);
  }

  let newChar: any = {
    name: charData.name,
    user: user!,
    race: raceFind,
    classe: classesFind,
    stats: classesFind.stats,
  };
  const char: any = charRepository.create(newChar);
  await charRepository.save(char);
  const newCharStats: iCharStatsCreate = {
    strength: raceFind.stats.strength + classesFind.stats.strength,
    dexterity: raceFind.stats.dexterity + classesFind.stats.dexterity,
    inteligence: raceFind.stats.inteligence + classesFind.stats.inteligence,
    armor: classesFind.stats.armor,
    critical: classesFind.stats.critical,
    damageBonus: classesFind.stats.damageBonus,
    damageMax: classesFind.stats.damageMax,
    damageMin: classesFind.stats.damageMin,
    dodge: classesFind.stats.dodge,
    life: classesFind.stats.life,
    magicBonus: classesFind.stats.magicBonus,
    magicMax: classesFind.stats.magicMax,
    magicMin: classesFind.stats.magicMin,
    mana: classesFind.stats.mana,
    precision: classesFind.stats.precision,
  };
  const charStats: iCharStatsCreate = statsRepository.create({
    ...newCharStats,
    char: char,
  });
  await statsRepository.save(charStats);

  const resistence: iResistenceCreate = resistenceRepository.create({
    char: char,
    cold: 0,
    fire: 0,
    lighting: 0,
  });
  await resistenceRepository.save(resistence);
  char.charsStats = charStats;
  char.resistences = resistence;
  const createChar: iChar = returnCharSchema.parse(char);
  return createChar;
}
