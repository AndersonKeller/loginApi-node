import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683848943191 implements MigrationInterface {
    name = 'InitialMigration1683848943191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_9808aea1cfbf4c3d3fa738bb101"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "UQ_9808aea1cfbf4c3d3fa738bb101"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "charStatsId"`);
        await queryRunner.query(`ALTER TABLE "charstats" ADD "charId" integer`);
        await queryRunner.query(`ALTER TABLE "charstats" ADD CONSTRAINT "UQ_87268369ec3d8398157c37c539c" UNIQUE ("charId")`);
        await queryRunner.query(`ALTER TABLE "charstats" ADD CONSTRAINT "FK_87268369ec3d8398157c37c539c" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charstats" DROP CONSTRAINT "FK_87268369ec3d8398157c37c539c"`);
        await queryRunner.query(`ALTER TABLE "charstats" DROP CONSTRAINT "UQ_87268369ec3d8398157c37c539c"`);
        await queryRunner.query(`ALTER TABLE "charstats" DROP COLUMN "charId"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "charStatsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "UQ_9808aea1cfbf4c3d3fa738bb101" UNIQUE ("charStatsId")`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_9808aea1cfbf4c3d3fa738bb101" FOREIGN KEY ("charStatsId") REFERENCES "charstats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
