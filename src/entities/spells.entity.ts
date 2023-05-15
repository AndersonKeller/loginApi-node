import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Char } from "./chars.entity";
import { CharSpells } from "./chars_spells.entity";

@Entity("spells")
class Spell {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 52 })
  name: string;
  @Column()
  description: string;
  @Column()
  type: string;
  @OneToMany(() => CharSpells, (CharSpells) => CharSpells.spells)
  char: CharSpells[];
}
export { Spell };
