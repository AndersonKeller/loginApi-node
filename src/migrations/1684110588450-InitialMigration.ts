import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684110588450 implements MigrationInterface {
    name = 'InitialMigration1684110588450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" ADD "spellsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_20ebf2938be7805604d9008d802" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_20ebf2938be7805604d9008d802"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "spellsId"`);
    }

}
