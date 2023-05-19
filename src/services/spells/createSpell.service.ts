import { Repository } from "typeorm";
import { iSpell, iSpellCreate } from "../../interfaces/spells.interfaces";
import { Spell, SpellTypes, Types } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnSpellSchema } from "../../schemas/spells.schemas";
import { iType, iTypeCreate } from "../../interfaces/types.interfaces";
import { AppError } from "../../errors";

export async function createSpellService(
  spellData: iSpellCreate
): Promise<iSpell> {
  const spellrepository: Repository<Spell> = AppDataSource.getRepository(Spell);
  const typeRepository: Repository<Types> = AppDataSource.getRepository(Types);
  const spellsTypesRepository: Repository<SpellTypes> =
    AppDataSource.getRepository(SpellTypes);
  const spellExists: Spell | null = await spellrepository.findOneBy({
    name: spellData.name,
  });
  if (spellExists) {
    throw new AppError("Spells whit name already exists", 400);
  }

  spellData.typeSpell.forEach(async (typeTo) => {
    const typeFind: iType | null = await typeRepository.findOne({
      where: {
        name: typeTo,
      },
    });
    if (!typeFind) {
      const type: iTypeCreate = typeRepository.create({
        name: typeTo,
      });
      await typeRepository.save(type);
    }
  });
  const spell: any = spellrepository.create(spellData);
  await spellrepository.save(spell);

  spellData.typeSpell.forEach(async (type) => {
    const typeFind: iType | null = await typeRepository.findOne({
      where: {
        name: type,
      },
      relations: {
        spell: true,
      },
    });
    const spellType = spellsTypesRepository.create({
      spell: spell!,
      type: typeFind!,
    });
    await spellsTypesRepository.save(spellType);
  });

  spell.types = spellData.typeSpell;
  const newSpell: iSpell = returnSpellSchema.parse(spell);
  return newSpell;
}
