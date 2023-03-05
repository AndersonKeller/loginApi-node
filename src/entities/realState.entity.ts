import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Address } from "./adresses.entity";
import { Category } from "./categories.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtaedAt: string;

  @OneToOne(() => Address, { nullable: true })
  @JoinColumn()
  address?: Address | null | undefined;

  @ManyToOne(() => Category)
  category: Category;
}
export { RealEstate };
