import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684111076044 implements MigrationInterface {
    name = 'InitialMigration1684111076044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455"`);
        await queryRunner.query(`CREATE TABLE "chars_equips" ("id" SERIAL NOT NULL, CONSTRAINT "PK_7952ff81bf2a1259ff3fa54522e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "equips" ADD "charsId" integer`);
        await queryRunner.query(`ALTER TABLE "equips" ADD CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb" FOREIGN KEY ("charsId") REFERENCES "chars_equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455" FOREIGN KEY ("equipsId") REFERENCES "chars_equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455"`);
        await queryRunner.query(`ALTER TABLE "equips" DROP CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb"`);
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "charsId"`);
        await queryRunner.query(`DROP TABLE "chars_equips"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455" FOREIGN KEY ("equipsId") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
