import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684110414651 implements MigrationInterface {
    name = 'InitialMigration1684110414651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equips" DROP CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb"`);
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "charsId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equips" ADD "charsId" integer`);
        await queryRunner.query(`ALTER TABLE "equips" ADD CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb" FOREIGN KEY ("charsId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
