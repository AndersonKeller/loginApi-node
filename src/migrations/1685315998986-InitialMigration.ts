import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685315998986 implements MigrationInterface {
    name = 'InitialMigration1685315998986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" ADD "statsId" integer`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_e538538dcd79b9916e7ae27d68f" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_e538538dcd79b9916e7ae27d68f"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP COLUMN "statsId"`);
    }

}
