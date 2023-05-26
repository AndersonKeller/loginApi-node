import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { CharEquips } from "./chars_equips.entity";
import { equipType } from "../schemas/equips.schemas";

@Entity("equips")
class Equip {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ length: 52 })
  name: string;
  @Column({ type: "enum", enum: equipType })
  type: equipType;
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
  @Column()
  cost: number;
  @OneToMany(() => CharEquips, (CharEquips) => CharEquips.equips)
  chars: CharEquips[];
}
export { Equip };
