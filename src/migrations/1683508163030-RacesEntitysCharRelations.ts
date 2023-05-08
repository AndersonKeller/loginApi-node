import { MigrationInterface, QueryRunner } from "typeorm";

export class RacesEntitysCharRelations1683508163030 implements MigrationInterface {
    name = 'RacesEntitysCharRelations1683508163030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "REL_48ffc87e75a2ac07d37c0ce6ef"`);
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "FK_82690aa363436b6eca10a419911"`);
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "REL_82690aa363436b6eca10a41991"`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "FK_82690aa363436b6eca10a419911" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "FK_82690aa363436b6eca10a419911"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb"`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "REL_82690aa363436b6eca10a41991" UNIQUE ("statsId")`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "FK_82690aa363436b6eca10a419911" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "REL_48ffc87e75a2ac07d37c0ce6ef" UNIQUE ("statsId")`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
