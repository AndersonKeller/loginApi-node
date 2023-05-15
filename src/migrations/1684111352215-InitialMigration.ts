import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684111352215 implements MigrationInterface {
    name = 'InitialMigration1684111352215'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equips" DROP CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb"`);
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "charsId"`);
        await queryRunner.query(`ALTER TABLE "chars_equips" ADD "equipsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars_equips" ADD CONSTRAINT "FK_a168c3da50df59168dffdddac63" FOREIGN KEY ("equipsId") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars_equips" DROP CONSTRAINT "FK_a168c3da50df59168dffdddac63"`);
        await queryRunner.query(`ALTER TABLE "chars_equips" DROP COLUMN "equipsId"`);
        await queryRunner.query(`ALTER TABLE "equips" ADD "charsId" integer`);
        await queryRunner.query(`ALTER TABLE "equips" ADD CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb" FOREIGN KEY ("charsId") REFERENCES "chars_equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
