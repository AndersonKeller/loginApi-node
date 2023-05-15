import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Char } from "./chars.entity";
import { Spell } from "./spells.entity";

@Entity("chars_spells")
class CharSpells {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @ManyToOne(() => Char)
  char: Char[];
  @ManyToOne(() => Spell)
  spells: Spell[];
}
export { CharSpells };
