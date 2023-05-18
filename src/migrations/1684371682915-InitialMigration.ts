import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684371682915 implements MigrationInterface {
    name = 'InitialMigration1684371682915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equips" ADD "cost" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."equips_type_enum" AS ENUM('WEAPON', 'ARMOR')`);
        await queryRunner.query(`ALTER TABLE "equips" ADD "type" "public"."equips_type_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."equips_type_enum"`);
        await queryRunner.query(`ALTER TABLE "equips" ADD "type" character varying(52) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "cost"`);
    }

}
