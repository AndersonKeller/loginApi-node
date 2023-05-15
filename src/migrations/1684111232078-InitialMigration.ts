import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1684111232078 implements MigrationInterface {
    name = 'InitialMigration1684111232078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP COLUMN "equipsId"`);
        await queryRunner.query(`ALTER TABLE "chars_equips" ADD "charId" integer`);
        await queryRunner.query(`ALTER TABLE "chars_equips" ADD CONSTRAINT "FK_6a950761d02e041b4b858ecb472" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chars_equips" DROP CONSTRAINT "FK_6a950761d02e041b4b858ecb472"`);
        await queryRunner.query(`ALTER TABLE "chars_equips" DROP COLUMN "charId"`);
        await queryRunner.query(`ALTER TABLE "chars" ADD "equipsId" integer`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_a9b73e1ed3ef620b27fe9412455" FOREIGN KEY ("equipsId") REFERENCES "chars_equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
