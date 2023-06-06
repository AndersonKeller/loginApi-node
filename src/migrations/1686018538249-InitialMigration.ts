import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1686018538249 implements MigrationInterface {
    name = 'InitialMigration1686018538249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_d021018170af5072249db02f86d"`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "UQ_d021018170af5072249db02f86d" UNIQUE ("charId")`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_d021018170af5072249db02f86d" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_d021018170af5072249db02f86d"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "UQ_d021018170af5072249db02f86d"`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_d021018170af5072249db02f86d" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
