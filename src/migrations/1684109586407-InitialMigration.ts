import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684109586407 implements MigrationInterface {
    name = 'InitialMigration1684109586407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "equips" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "type" character varying(52) NOT NULL, "description" character varying, "damage" integer, "armor" integer, "magic" integer, "weigth" integer NOT NULL, CONSTRAINT "PK_f5de6fea0f7e1b1344295c62537" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "equipId" integer`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_3d57e1e5b9af0356c4374eb36ac" FOREIGN KEY ("equipId") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_3d57e1e5b9af0356c4374eb36ac"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "equipId"`);
        await queryRunner.query(`DROP TABLE "equips"`);
    }

}
