import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684282777491 implements MigrationInterface {
    name = 'InitialMigration1684282777491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spells" DROP CONSTRAINT "FK_fd765a72e6b733c8bbf04a391fd"`);
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "spells" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "spells_types" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD "typeId" integer`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD "spellId" integer`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD CONSTRAINT "FK_73078b035ddeb3088df856aeaa7" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD CONSTRAINT "FK_69fe2abb0d1ee4f8bd8fd88996c" FOREIGN KEY ("spellId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spells_types" DROP CONSTRAINT "FK_69fe2abb0d1ee4f8bd8fd88996c"`);
        await queryRunner.query(`ALTER TABLE "spells_types" DROP CONSTRAINT "FK_73078b035ddeb3088df856aeaa7"`);
        await queryRunner.query(`ALTER TABLE "spells_types" DROP COLUMN "spellId"`);
        await queryRunner.query(`ALTER TABLE "spells_types" DROP COLUMN "typeId"`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD "name" character varying(52) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "spells" ADD "typeId" integer`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`ALTER TABLE "spells" ADD CONSTRAINT "FK_fd765a72e6b733c8bbf04a391fd" FOREIGN KEY ("typeId") REFERENCES "spells_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
