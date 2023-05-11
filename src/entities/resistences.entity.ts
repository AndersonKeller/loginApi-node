import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Char } from "./chars.entity";

@Entity("resistances")
class Resistence {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  fire: number;

  @Column()
  cold: number;

  @Column()
  lighting: number;

  @OneToMany(() => Char, (Char) => Char.resistences)
  chars: Char[];
}
export { Resistence };
