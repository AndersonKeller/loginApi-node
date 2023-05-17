import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Char } from "./chars.entity";
import { CharEquips } from "./chars_equips.entity";

@Entity("equips")
class Equip {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 52 })
  name: string;
  @Column({ length: 52 })
  type: string;
  @Column({ nullable: true })
  description?: string;
  @Column({ nullable: true })
  damageMax?: number;
  @Column({ nullable: true })
  damageMin?: number;
  @Column({ nullable: true })
  armor?: number;
  @Column({ nullable: true })
  magicMin?: number;
  @Column({ nullable: true })
  magicMax?: number;
  @Column()
  weigth: number;
  @OneToMany(() => CharEquips, (CharEquips) => CharEquips.equips)
  chars: CharEquips[];
}
export { Equip };
