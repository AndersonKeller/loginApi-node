import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Char } from "./chars.entity";
import { Equip } from "./equips.entity";
import { subType } from "../schemas/equips.schemas";

@Entity("gear")
class Gear {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "helm" })
  helm: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "boots" })
  boots: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "belt" })
  belt: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "gloves" })
  gloves: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "l_ring" })
  l_ring: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "r_ring" })
  r_ring: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "amulet" })
  amulet: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "l_hand" })
  l_hand: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "r_hand" })
  r_hand: Equip | null;

  @ManyToOne(() => Equip, (Equip) => Equip.subtype, { nullable: true })
  @JoinColumn({ name: "chest_plate" })
  chest_plate: Equip | null;

  @OneToOne(() => Char)
  @JoinColumn()
  char: Char;
}

export { Gear };
