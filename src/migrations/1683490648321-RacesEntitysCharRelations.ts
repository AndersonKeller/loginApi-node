import { MigrationInterface, QueryRunner } from "typeorm";

export class RacesEntitysCharRelations1683490648321 implements MigrationInterface {
    name = 'RacesEntitysCharRelations1683490648321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "UQ_1f3940af28a76098f31004f03ca" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "UQ_baf8f0045fa05ba1149aedee823" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "UQ_baf8f0045fa05ba1149aedee823"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "UQ_1f3940af28a76098f31004f03ca"`);
    }

}
