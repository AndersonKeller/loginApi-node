import { MigrationInterface, QueryRunner } from "typeorm";

export class updateEntities1678316666311 implements MigrationInterface {
    name = 'updateEntities1678316666311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "UQ_66d47e5eeb138557eae4fa56515" UNIQUE ("realEstateId")`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_66d47e5eeb138557eae4fa56515" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_66d47e5eeb138557eae4fa56515"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "UQ_66d47e5eeb138557eae4fa56515"`);
        await queryRunner.query(`ALTER TABLE "adresses" DROP COLUMN "realEstateId"`);
    }

}
