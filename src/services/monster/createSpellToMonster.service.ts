import { Repository } from "typeorm";
import {
  iMonsterSpell,
  iMonsterSpellCreate,
} from "../../interfaces/monster.interface";
import { Monster, Spell } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { returnMonsterSpellSchema } from "../../schemas/monster.schemas";

export async function createSpellToMonsterService(
  monsterId: number,
  spellData: iMonsterSpellCreate
): Promise<iMonsterSpell> {
  const monsterRepository: Repository<Monster> =
    AppDataSource.getRepository(Monster);
  const spellRepository: Repository<Spell> = AppDataSource.getRepository(Spell);

  const monsterFind: Monster | null = await monsterRepository.findOne({
    where: {
      id: monsterId,
    },
    relations: {
      spells: true,
    },
  });
  const spellExists: Spell | undefined = monsterFind?.spells.find((spell) => {
    if (spell.name == spellData.name) {
      return true;
    } else {
      return false;
    }
  });
  if (spellExists) {
    throw new AppError("Monster already this spell", 400);
  }
  const spellFind: Spell | null = await spellRepository.findOneBy({
    name: spellData.name,
  });
  if (!spellFind) {
    throw new AppError("Spell whit name not found", 404);
  }
  console.log(monsterFind);
  const newMonster: any = {
    ...monsterFind,
    spells: [...monsterFind?.spells!, spellFind!],
    spellFind,
  };
  const saveMonster = monsterRepository.create(newMonster);
  await monsterRepository.save(saveMonster);
  const returnSpell: iMonsterSpell = {
    monster: monsterFind!,
    spells: [...monsterFind?.spells!, ...newMonster.spells],
    id: monsterFind?.id!,
  };
  const spell = returnMonsterSpellSchema.parse(returnSpell);
  return spell;
}
