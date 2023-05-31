import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685498056346 implements MigrationInterface {
    name = 'InitialMigration1685498056346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gear" ADD "gloves" integer`);
        await queryRunner.query(`ALTER TABLE "gear" ADD "l_ring" integer`);
        await queryRunner.query(`ALTER TABLE "gear" ADD "r_ring" integer`);
        await queryRunner.query(`ALTER TABLE "gear" ADD "amulet" integer`);
        await queryRunner.query(`ALTER TABLE "gear" ADD "l_hand" integer`);
        await queryRunner.query(`ALTER TABLE "gear" ADD "r_hand" integer`);
        await queryRunner.query(`ALTER TABLE "gear" ADD "chest_plate" integer`);
        await queryRunner.query(`ALTER TYPE "public"."equips_subtype_enum" RENAME TO "equips_subtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."equips_subtype_enum" AS ENUM('ONE HAND', 'TWO HANDS', 'RING', 'BELT', 'BOOTS', 'HELM', '''SHIELD', 'CHEST PLATE', 'GLOVES', 'AMULET')`);
        await queryRunner.query(`ALTER TABLE "equips" ALTER COLUMN "subtype" TYPE "public"."equips_subtype_enum" USING "subtype"::"text"::"public"."equips_subtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."equips_subtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_06eed6cb6e393f1c484cbb14753" FOREIGN KEY ("gloves") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_193c56a07dd6f0bb12781255c7e" FOREIGN KEY ("l_ring") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_5f85a427aea7da61c08b1f750ab" FOREIGN KEY ("r_ring") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_b5fc2acdc2d07c83ae1433094ad" FOREIGN KEY ("amulet") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_f5903b7f059a459c170c152df7d" FOREIGN KEY ("l_hand") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_3042e8e0aa3f692cd474d12a193" FOREIGN KEY ("r_hand") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_ecda3dab9fe1e4f27facb68368c" FOREIGN KEY ("chest_plate") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_ecda3dab9fe1e4f27facb68368c"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_3042e8e0aa3f692cd474d12a193"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_f5903b7f059a459c170c152df7d"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_b5fc2acdc2d07c83ae1433094ad"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_5f85a427aea7da61c08b1f750ab"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_193c56a07dd6f0bb12781255c7e"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_06eed6cb6e393f1c484cbb14753"`);
        await queryRunner.query(`CREATE TYPE "public"."equips_subtype_enum_old" AS ENUM('ONE HAND', 'TWO HANDS', 'RING', 'BELT', 'BOOTS', 'HELM', '''SHIELD', 'CHEST PLATE', 'GLOVES')`);
        await queryRunner.query(`ALTER TABLE "equips" ALTER COLUMN "subtype" TYPE "public"."equips_subtype_enum_old" USING "subtype"::"text"::"public"."equips_subtype_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."equips_subtype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."equips_subtype_enum_old" RENAME TO "equips_subtype_enum"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "chest_plate"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "r_hand"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "l_hand"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "amulet"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "r_ring"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "l_ring"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP COLUMN "gloves"`);
    }

}
