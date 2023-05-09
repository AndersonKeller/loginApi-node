import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683594465081 implements MigrationInterface {
    name = 'InitialMigration1683594465081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" ADD "damageBonus" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "magicBonus" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "armor"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "armor" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "armor"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "armor" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "magicBonus"`);
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "damageBonus"`);
    }

}
