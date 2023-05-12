import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683836787265 implements MigrationInterface {
    name = 'InitialMigration1683836787265'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_7e9fa318d896251925ac4401e1d"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "resistencesId"`);
        await queryRunner.query(`ALTER TABLE "resistances" ADD "charId" integer`);
        await queryRunner.query(`ALTER TABLE "resistances" ADD CONSTRAINT "UQ_183da58a3245a122595b22b47ca" UNIQUE ("charId")`);
        await queryRunner.query(`ALTER TABLE "resistances" ADD CONSTRAINT "FK_183da58a3245a122595b22b47ca" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resistances" DROP CONSTRAINT "FK_183da58a3245a122595b22b47ca"`);
        await queryRunner.query(`ALTER TABLE "resistances" DROP CONSTRAINT "UQ_183da58a3245a122595b22b47ca"`);
        await queryRunner.query(`ALTER TABLE "resistances" DROP COLUMN "charId"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "resistencesId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_7e9fa318d896251925ac4401e1d" FOREIGN KEY ("resistencesId") REFERENCES "resistances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
