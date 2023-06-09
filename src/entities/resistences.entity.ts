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

  @OneToOne(() => Char, { nullable: true })
  @JoinColumn()
  char: Char | null;
}
export { Resistence };
