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

  @Column("float")
  life: number;

  @Column("float")
  mana: number;

  @Column("float")
  damageBonus: number;

  @Column("float")
  damageMin: number;
  @Column("float")
  damageMax: number;

  @Column("float")
  critical: number;
  @Column("float")
  magicBonus: number;

  @Column("float")
  magicMin: number;
  @Column("float")
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
