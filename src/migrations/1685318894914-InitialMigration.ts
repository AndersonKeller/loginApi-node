import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685318894914 implements MigrationInterface {
    name = 'InitialMigration1685318894914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_ae82dcd24f46a86ecaf5eda31a2"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP COLUMN "spellsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" ADD "spellsId" integer`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_ae82dcd24f46a86ecaf5eda31a2" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
