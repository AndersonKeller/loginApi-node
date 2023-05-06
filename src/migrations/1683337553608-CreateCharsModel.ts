import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCharsModel1683337553608 implements MigrationInterface {
    name = 'CreateCharsModel1683337553608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chars" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "race" character varying(15) NOT NULL, "class" character varying(22) NOT NULL, "userId" integer, CONSTRAINT "PK_1a61056ec3c83295dd644dd97c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_531b200fcb65aff3dae72637773" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_531b200fcb65aff3dae72637773"`);
        await queryRunner.query(`DROP TABLE "chars"`);
    }

}
