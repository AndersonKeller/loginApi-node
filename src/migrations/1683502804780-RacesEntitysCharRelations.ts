import { MigrationInterface, QueryRunner } from "typeorm";

export class RacesEntitysCharRelations1683502804780 implements MigrationInterface {
    name = 'RacesEntitysCharRelations1683502804780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "life" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "mana" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "damage" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "critical" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "magic" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "precision" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "armor" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "dodge" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "dodge" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "armor" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "precision" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "magic" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "critical" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "damage" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "mana" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stats" ALTER COLUMN "life" SET NOT NULL`);
    }

}
