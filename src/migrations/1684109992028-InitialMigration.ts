import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684109992028 implements MigrationInterface {
    name = 'InitialMigration1684109992028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "spells" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_19d1052082c20f04349c0b5875c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "spellId" integer`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_4e97160fba77fa532a92131a08e" FOREIGN KEY ("spellId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_4e97160fba77fa532a92131a08e"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "spellId"`);
        await queryRunner.query(`DROP TABLE "spells"`);
    }

}
