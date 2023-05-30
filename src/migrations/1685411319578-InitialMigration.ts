import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685411319578 implements MigrationInterface {
    name = 'InitialMigration1685411319578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" ADD "level" integer NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."monster_rarity_enum" AS ENUM('NORMAL', 'MAGIC', 'RARE', 'BOSS', 'EPIC BOSS')`);
        await queryRunner.query(`ALTER TABLE "monster" ADD "rarity" "public"."monster_rarity_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" DROP COLUMN "rarity"`);
        await queryRunner.query(`DROP TYPE "public"."monster_rarity_enum"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP COLUMN "level"`);
    }

}
