import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683764678231 implements MigrationInterface {
    name = 'InitialMigration1683764678231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charstats" ADD "charId" integer`);
        await queryRunner.query(`ALTER TABLE "charstats" ADD CONSTRAINT "UQ_87268369ec3d8398157c37c539c" UNIQUE ("charId")`);
        await queryRunner.query(`ALTER TABLE "charstats" ADD CONSTRAINT "FK_87268369ec3d8398157c37c539c" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charstats" DROP CONSTRAINT "FK_87268369ec3d8398157c37c539c"`);
        await queryRunner.query(`ALTER TABLE "charstats" DROP CONSTRAINT "UQ_87268369ec3d8398157c37c539c"`);
        await queryRunner.query(`ALTER TABLE "charstats" DROP COLUMN "charId"`);
    }

}
