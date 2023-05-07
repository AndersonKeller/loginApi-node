import { MigrationInterface, QueryRunner } from "typeorm";

export class ClassesAndStats1683484484652 implements MigrationInterface {
    name = 'ClassesAndStats1683484484652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP CONSTRAINT "FK_d3f77fa4c3e2a11c6fdf909256e"`);
        await queryRunner.query(`ALTER TABLE "stats" DROP COLUMN "classesId"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "statsId" integer`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "UQ_48ffc87e75a2ac07d37c0ce6efb" UNIQUE ("statsId")`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "UQ_48ffc87e75a2ac07d37c0ce6efb"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "statsId"`);
        await queryRunner.query(`ALTER TABLE "stats" ADD "classesId" integer`);
        await queryRunner.query(`ALTER TABLE "stats" ADD CONSTRAINT "FK_d3f77fa4c3e2a11c6fdf909256e" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
