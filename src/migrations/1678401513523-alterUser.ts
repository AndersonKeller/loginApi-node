import { MigrationInterface, QueryRunner } from "typeorm";

export class alterUser1678401513523 implements MigrationInterface {
    name = 'alterUser1678401513523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7deb0d9ad35f29df4fc97074250"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "scheduleId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "scheduleId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7deb0d9ad35f29df4fc97074250" FOREIGN KEY ("scheduleId") REFERENCES "schedules_users_properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
