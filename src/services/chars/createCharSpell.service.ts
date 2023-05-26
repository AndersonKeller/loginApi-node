import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Char, CharSpells, Spell } from "../../entities";
import {
  iCharSpell,
  iCharSpellCreate,
} from "../../interfaces/chars.interfaces";
import { returnCharSpellSchema } from "../../schemas/chars.schemas";
import { AppError } from "../../errors";

export async function createCharSpellService(
  charId: number,
  spellData: iCharSpellCreate
): Promise<iCharSpell> {
  const charRepository: Repository<Char> = AppDataSource.getRepository(Char);
  const spellRepository: Repository<Spell> = AppDataSource.getRepository(Spell);
  const charSpellRepository: Repository<CharSpells> =
    AppDataSource.getRepository(CharSpells);

  const charFind: any = await charRepository.findOne({
    where: {
      id: charId,
    },
  });
  const spellFind: any = await spellRepository.findOne({
    where: {
      name: spellData.name,
    },
    relations: {
      types: true,
    },
  });
  if (!spellFind) {
    throw new AppError("Spell not found", 404);
  }
  const charSpellFind: CharSpells[] | null = await charSpellRepository.find({
    where: {
      char: charFind,
      spells: spellFind,
    },
  });
  if (charSpellFind.length > 0) {
    throw new AppError("Char Spell already taken", 400);
  }
  const charSpell: any = charSpellRepository.create({
    char: charFind!,
    spells: spellFind!,
  });
  await charSpellRepository.save(charSpell);
  const newSpell = returnCharSpellSchema.parse(charSpell);
  return newSpell;
}
