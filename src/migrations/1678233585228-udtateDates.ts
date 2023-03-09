import { MigrationInterface, QueryRunner } from "typeorm";

export class udtateDates1678233585228 implements MigrationInterface {
    name = 'udtateDates1678233585228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "updtaedAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "updatedAt" TO "updtaedAt"`);
    }

}
