import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685315521590 implements MigrationInterface {
    name = 'InitialMigration1685315521590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "monster" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "resistenceId" integer, "spellsId" integer, CONSTRAINT "REL_21ca335d08d3b433f61056ea75" UNIQUE ("resistenceId"), CONSTRAINT "PK_9d95b6eedf1fbbea6b329b91f81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_21ca335d08d3b433f61056ea756" FOREIGN KEY ("resistenceId") REFERENCES "resistances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_ae82dcd24f46a86ecaf5eda31a2" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_ae82dcd24f46a86ecaf5eda31a2"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_21ca335d08d3b433f61056ea756"`);
        await queryRunner.query(`DROP TABLE "monster"`);
    }

}
