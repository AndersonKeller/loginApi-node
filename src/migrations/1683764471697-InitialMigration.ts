import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683764471697 implements MigrationInterface {
    name = 'InitialMigration1683764471697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charstats" ("id" SERIAL NOT NULL, "strength" integer NOT NULL, "inteligence" integer NOT NULL, "dexterity" integer NOT NULL, "life" double precision NOT NULL, "mana" double precision NOT NULL, "damageBonus" double precision NOT NULL, "damageMin" double precision NOT NULL, "damageMax" double precision NOT NULL, "critical" double precision NOT NULL, "magicBonus" double precision NOT NULL, "magicMin" double precision NOT NULL, "magicMax" double precision NOT NULL, "precision" double precision NOT NULL, "armor" double precision NOT NULL, "dodge" double precision NOT NULL, CONSTRAINT "PK_faef66e9aacdcfd1a99cc6fb884" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "charstats"`);
    }

}
