import { MigrationInterface, QueryRunner } from "typeorm";

export class RacesEntitysCharRelations1683485449375 implements MigrationInterface {
    name = 'RacesEntitysCharRelations1683485449375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_968700a6d37c93a3c7f78b39afa"`);
        await queryRunner.query(`CREATE TABLE "races" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, "statsId" integer, CONSTRAINT "REL_82690aa363436b6eca10a41991" UNIQUE ("statsId"), CONSTRAINT "PK_ba7d19b382156bc33244426c597" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "race"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "UQ_968700a6d37c93a3c7f78b39afa"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "classesId"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "classeId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "UQ_dd51aae30cf02206fb5b72de518" UNIQUE ("classeId")`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "raceId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "UQ_0c42fda595874a8d5dd9e892793" UNIQUE ("raceId")`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "FK_82690aa363436b6eca10a419911" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_dd51aae30cf02206fb5b72de518" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_0c42fda595874a8d5dd9e892793" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_0c42fda595874a8d5dd9e892793"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_dd51aae30cf02206fb5b72de518"`);
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "FK_82690aa363436b6eca10a419911"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "UQ_0c42fda595874a8d5dd9e892793"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "raceId"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "UQ_dd51aae30cf02206fb5b72de518"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "classeId"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "classesId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "UQ_968700a6d37c93a3c7f78b39afa" UNIQUE ("classesId")`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "race" character varying(22) NOT NULL`);
        await queryRunner.query(`DROP TABLE "races"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_968700a6d37c93a3c7f78b39afa" FOREIGN KEY ("classesId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
