import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683849780818 implements MigrationInterface {
    name = 'InitialMigration1683849780818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_415c605b5da5b63a10a1c71b83d"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "statsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" ADD "statsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_415c605b5da5b63a10a1c71b83d" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
