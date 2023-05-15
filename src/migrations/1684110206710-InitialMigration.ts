import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684110206710 implements MigrationInterface {
    name = 'InitialMigration1684110206710'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "spells" ADD "charsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "spellsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "equipsId" integer`);
        await queryRunner.query(`ALTER TABLE "equips" ADD "charsId" integer`);
        await queryRunner.query(`ALTER TABLE "spells" ADD CONSTRAINT "FK_757b75f64fc2daf9171b1ae0c39" FOREIGN KEY ("charsId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_20ebf2938be7805604d9008d802" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455" FOREIGN KEY ("equipsId") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "equips" ADD CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb" FOREIGN KEY ("charsId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "equips" DROP CONSTRAINT "FK_57088a25c7cb05a4569a89a97fb"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_20ebf2938be7805604d9008d802"`);
        await queryRunner.query(`ALTER TABLE "spells" DROP CONSTRAINT "FK_757b75f64fc2daf9171b1ae0c39"`);
        await queryRunner.query(`ALTER TABLE "equips" DROP COLUMN "charsId"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "equipsId"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "spellsId"`);
        await queryRunner.query(`ALTER TABLE "spells" DROP COLUMN "charsId"`);
    }

}
