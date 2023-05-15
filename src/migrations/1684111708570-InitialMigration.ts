import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684111708570 implements MigrationInterface {
    name = 'InitialMigration1684111708570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_20ebf2938be7805604d9008d802"`);
        await queryRunner.query(`CREATE TABLE "chars_spells" ("id" SERIAL NOT NULL, "charId" integer, "spellsId" integer, CONSTRAINT "PK_564b9b027ce0a5d1b1b16cf80a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "spellsId"`);
        await queryRunner.query(`ALTER TABLE "chars_spells" ADD CONSTRAINT "FK_3a853cfd1d9097f8f77df2a472c" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars_spells" ADD CONSTRAINT "FK_71899a3a940b99458a1c44c7f24" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars_spells" DROP CONSTRAINT "FK_71899a3a940b99458a1c44c7f24"`);
        await queryRunner.query(`ALTER TABLE "chars_spells" DROP CONSTRAINT "FK_3a853cfd1d9097f8f77df2a472c"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "spellsId" integer`);
        await queryRunner.query(`DROP TABLE "chars_spells"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_20ebf2938be7805604d9008d802" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
