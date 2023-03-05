import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("adresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  sizCode: string;

  @Column({ length: 6, nullable: true })
  number?: string;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
export { Address };
