import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Char } from "./chars.entity";

@Entity("stats")
class Stats {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  strength: number;

  @Column()
  inteligence: number;

  @Column()
  dexterity: number;

  @Column()
  life: number;

  @Column()
  mana: number;

  @Column("float")
  damageBonus: number;

  @Column()
  damageMin: number;
  @Column()
  damageMax: number;

  @Column("float")
  critical: number;
  @Column("float")
  magicBonus: number;

  @Column()
  magicMin: number;
  @Column()
  magicMax: number;

  @Column("float")
  precision: number;

  @Column("float")
  armor: number;
  @Column("float")
  dodge: number;

  @OneToMany(() => Char, (Char) => Char.stats)
  stats: Char[];
}

export { Stats };
