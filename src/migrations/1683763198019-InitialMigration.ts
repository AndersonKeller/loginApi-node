import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683763198019 implements MigrationInterface {
    name = 'InitialMigration1683763198019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "races" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, "statsId" integer, CONSTRAINT "UQ_baf8f0045fa05ba1149aedee823" UNIQUE ("name"), CONSTRAINT "PK_ba7d19b382156bc33244426c597" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resistances" ("id" SERIAL NOT NULL, "fire" integer NOT NULL, "cold" integer NOT NULL, "lighting" integer NOT NULL, CONSTRAINT "PK_fe24b16e34da7077c094b44bcd1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chars" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "classeId" integer, "raceId" integer, "userId" integer, "statsId" integer, "resistencesId" integer, CONSTRAINT "PK_1a61056ec3c83295dd644dd97c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stats" ("id" SERIAL NOT NULL, "strength" integer NOT NULL, "inteligence" integer NOT NULL, "dexterity" integer NOT NULL, "life" double precision NOT NULL, "mana" double precision NOT NULL, "damageBonus" double precision NOT NULL, "damageMin" double precision NOT NULL, "damageMax" double precision NOT NULL, "critical" double precision NOT NULL, "magicBonus" double precision NOT NULL, "magicMin" double precision NOT NULL, "magicMax" double precision NOT NULL, "precision" double precision NOT NULL, "armor" double precision NOT NULL, "dodge" double precision NOT NULL, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, "statsId" integer, CONSTRAINT "UQ_1f3940af28a76098f31004f03ca" UNIQUE ("name"), CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "FK_82690aa363436b6eca10a419911" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_dd51aae30cf02206fb5b72de518" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_0c42fda595874a8d5dd9e892793" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_531b200fcb65aff3dae72637773" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_415c605b5da5b63a10a1c71b83d" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_7e9fa318d896251925ac4401e1d" FOREIGN KEY ("resistencesId") REFERENCES "resistances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_7e9fa318d896251925ac4401e1d"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_415c605b5da5b63a10a1c71b83d"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_531b200fcb65aff3dae72637773"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_0c42fda595874a8d5dd9e892793"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_dd51aae30cf02206fb5b72de518"`);
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "FK_82690aa363436b6eca10a419911"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "stats"`);
        await queryRunner.query(`DROP TABLE "chars"`);
        await queryRunner.query(`DROP TABLE "resistances"`);
        await queryRunner.query(`DROP TABLE "races"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
