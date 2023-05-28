import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Char } from "./chars.entity";
import { Equip } from "./equips.entity";

@Entity("chars_equips")
class CharEquips {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @ManyToOne(() => Char)
  char: Char;
  @ManyToOne(() => Equip)
  equips: Equip;
}
export { CharEquips };
