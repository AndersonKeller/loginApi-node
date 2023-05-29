import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685319241641 implements MigrationInterface {
    name = 'InitialMigration1685319241641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" ADD "resistenceId" integer`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "UQ_21ca335d08d3b433f61056ea756" UNIQUE ("resistenceId")`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_21ca335d08d3b433f61056ea756" FOREIGN KEY ("resistenceId") REFERENCES "resistances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_21ca335d08d3b433f61056ea756"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "UQ_21ca335d08d3b433f61056ea756"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP COLUMN "resistenceId"`);
    }

}
