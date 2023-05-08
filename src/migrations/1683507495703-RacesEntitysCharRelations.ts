import { MigrationInterface, QueryRunner } from "typeorm";

export class RacesEntitysCharRelations1683507495703 implements MigrationInterface {
    name = 'RacesEntitysCharRelations1683507495703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_dd51aae30cf02206fb5b72de518"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_0c42fda595874a8d5dd9e892793"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "REL_dd51aae30cf02206fb5b72de51"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "REL_0c42fda595874a8d5dd9e89279"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_dd51aae30cf02206fb5b72de518" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_0c42fda595874a8d5dd9e892793" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_0c42fda595874a8d5dd9e892793"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_dd51aae30cf02206fb5b72de518"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "REL_0c42fda595874a8d5dd9e89279" UNIQUE ("raceId")`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "REL_dd51aae30cf02206fb5b72de51" UNIQUE ("classeId")`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_0c42fda595874a8d5dd9e892793" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_dd51aae30cf02206fb5b72de518" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
