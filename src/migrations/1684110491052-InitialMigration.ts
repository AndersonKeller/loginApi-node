import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684110491052 implements MigrationInterface {
    name = 'InitialMigration1684110491052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spells" DROP CONSTRAINT "FK_757b75f64fc2daf9171b1ae0c39"`);
        await queryRunner.query(`ALTER TABLE "spells" DROP COLUMN "charsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spells" ADD "charsId" integer`);
        await queryRunner.query(`ALTER TABLE "spells" ADD CONSTRAINT "FK_757b75f64fc2daf9171b1ae0c39" FOREIGN KEY ("charsId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
