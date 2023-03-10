import { MigrationInterface, QueryRunner } from "typeorm";

export class alterUser1678407449810 implements MigrationInterface {
    name = 'alterUser1678407449810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_66d47e5eeb138557eae4fa56515"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "UQ_66d47e5eeb138557eae4fa56515"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "realEstateId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "UQ_66d47e5eeb138557eae4fa56515" UNIQUE ("realEstateId")`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_66d47e5eeb138557eae4fa56515" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
