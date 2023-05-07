import { MigrationInterface, QueryRunner } from "typeorm";

export class CharClassesRelations1683484799545 implements MigrationInterface {
    name = 'CharClassesRelations1683484799545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" RENAME COLUMN "class" TO "race"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" RENAME COLUMN "race" TO "class"`);
    }

}
