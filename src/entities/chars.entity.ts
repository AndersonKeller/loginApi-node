import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./users.entity";
import { Classes } from "./classes.entity";
import { Race } from "./races.entity";
import { Stats } from "./stats.entity";
import { Resistence } from "./resistences.entity";
import { CharStats } from "./charStats.entity";
import { Spell } from "./spells.entity";
import { Equip } from "./equips.entity";
import { CharEquips } from "./chars_equips.entity";
import { CharSpells } from "./chars_spells.entity";

@Entity("chars")
class Char {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 52 })
  name: string;

  @ManyToOne(() => Classes)
  classe: Classes;

  @ManyToOne(() => Race)
  race: Race;

  @ManyToOne(() => User)
  user: User;

  @OneToMany(() => CharEquips, (CharEquips) => CharEquips.char)
  equips: CharEquips[];
  @OneToMany(() => CharSpells, (CharSpells) => CharSpells.char)
  spells: CharSpells[];
}
export { Char };
