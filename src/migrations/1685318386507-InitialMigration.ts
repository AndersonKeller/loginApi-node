import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685318386507 implements MigrationInterface {
    name = 'InitialMigration1685318386507'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_21ca335d08d3b433f61056ea756"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "REL_21ca335d08d3b433f61056ea75"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP COLUMN "resistenceId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" ADD "resistenceId" integer`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "REL_21ca335d08d3b433f61056ea75" UNIQUE ("resistenceId")`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_21ca335d08d3b433f61056ea756" FOREIGN KEY ("resistenceId") REFERENCES "resistances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
