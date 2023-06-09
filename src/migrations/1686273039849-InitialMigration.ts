import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1686273039849 implements MigrationInterface {
    name = 'InitialMigration1686273039849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stats" ("id" SERIAL NOT NULL, "strength" integer NOT NULL, "inteligence" integer NOT NULL, "dexterity" integer NOT NULL, "life" double precision NOT NULL, "mana" double precision NOT NULL, "damageBonus" double precision NOT NULL, "damageMin" double precision NOT NULL, "damageMax" double precision NOT NULL, "critical" double precision NOT NULL, "magicBonus" double precision NOT NULL, "magicMin" double precision NOT NULL, "magicMax" double precision NOT NULL, "precision" double precision NOT NULL, "armor" double precision NOT NULL, "dodge" double precision NOT NULL, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chars_equips" ("id" SERIAL NOT NULL, "charId" integer, "equipsId" integer, CONSTRAINT "PK_7952ff81bf2a1259ff3fa54522e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."equips_type_enum" AS ENUM('WEAPON', 'ARMOR', 'ACESSORIE')`);
        await queryRunner.query(`CREATE TYPE "public"."equips_subtype_enum" AS ENUM('ONE HAND', 'TWO HANDS', 'RING', 'BELT', 'BOOTS', 'HELM', '''SHIELD', 'CHEST PLATE', 'GLOVES', 'AMULET')`);
        await queryRunner.query(`CREATE TABLE "equips" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "type" "public"."equips_type_enum" NOT NULL, "subtype" "public"."equips_subtype_enum" NOT NULL, "description" character varying, "damageMax" integer, "damageMin" integer, "armor" integer, "magicMin" integer, "magicMax" integer, "weigth" integer NOT NULL, "cost" integer NOT NULL, CONSTRAINT "PK_f5de6fea0f7e1b1344295c62537" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "types" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, CONSTRAINT "PK_33b81de5358589c738907c3559b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "spells_types" ("id" SERIAL NOT NULL, "typeId" integer, "spellId" integer, CONSTRAINT "PK_5024b4d41ce8348bd5dce216fdc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chars_spells" ("id" SERIAL NOT NULL, "charId" integer, "spellsId" integer, CONSTRAINT "PK_564b9b027ce0a5d1b1b16cf80a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "spells" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_19d1052082c20f04349c0b5875c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, "statsId" integer, "equipId" integer, "spellId" integer, CONSTRAINT "UQ_1f3940af28a76098f31004f03ca" UNIQUE ("name"), CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "races" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "description" character varying NOT NULL, "statsId" integer, CONSTRAINT "UQ_baf8f0045fa05ba1149aedee823" UNIQUE ("name"), CONSTRAINT "PK_ba7d19b382156bc33244426c597" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chars" ("id" SERIAL NOT NULL, "name" character varying(52) NOT NULL, "classeId" integer, "raceId" integer, "userId" integer, CONSTRAINT "PK_1a61056ec3c83295dd644dd97c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "charstats" ("id" SERIAL NOT NULL, "strength" integer NOT NULL, "inteligence" integer NOT NULL, "dexterity" integer NOT NULL, "life" double precision NOT NULL, "mana" double precision NOT NULL, "damageBonus" double precision NOT NULL, "damageMin" double precision NOT NULL, "damageMax" double precision NOT NULL, "critical" double precision NOT NULL, "magicBonus" double precision NOT NULL, "magicMin" double precision NOT NULL, "magicMax" double precision NOT NULL, "precision" double precision NOT NULL, "armor" double precision NOT NULL, "dodge" double precision NOT NULL, "charId" integer, CONSTRAINT "REL_87268369ec3d8398157c37c539" UNIQUE ("charId"), CONSTRAINT "PK_faef66e9aacdcfd1a99cc6fb884" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gear" ("id" SERIAL NOT NULL, "helm" integer, "boots" integer, "belt" integer, "gloves" integer, "l_ring" integer, "r_ring" integer, "amulet" integer, "l_hand" integer, "r_hand" integer, "chest_plate" integer, "charId" integer, CONSTRAINT "REL_d021018170af5072249db02f86" UNIQUE ("charId"), CONSTRAINT "PK_f57e90b5a9b1363699e02ffe30c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "resistances" ("id" SERIAL NOT NULL, "fire" integer NOT NULL, "cold" integer NOT NULL, "lighting" integer NOT NULL, "charId" integer, CONSTRAINT "REL_183da58a3245a122595b22b47c" UNIQUE ("charId"), CONSTRAINT "PK_fe24b16e34da7077c094b44bcd1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."monster_rarity_enum" AS ENUM('NORMAL', 'MAGIC', 'RARE', 'BOSS', 'EPIC BOSS')`);
        await queryRunner.query(`CREATE TABLE "monster" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "level" integer NOT NULL, "rarity" "public"."monster_rarity_enum" NOT NULL, "statsId" integer, "resistenceId" integer, CONSTRAINT "REL_21ca335d08d3b433f61056ea75" UNIQUE ("resistenceId"), CONSTRAINT "PK_9d95b6eedf1fbbea6b329b91f81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "monster_spells_spells" ("monsterId" integer NOT NULL, "spellsId" integer NOT NULL, CONSTRAINT "PK_7c7e65d540f241fbe360c8cc1ab" PRIMARY KEY ("monsterId", "spellsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_69f897fcbc6a10d4de7cce883a" ON "monster_spells_spells" ("monsterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a157b10c39b123c15af36e68a3" ON "monster_spells_spells" ("spellsId") `);
        await queryRunner.query(`ALTER TABLE "chars_equips" ADD CONSTRAINT "FK_6a950761d02e041b4b858ecb472" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars_equips" ADD CONSTRAINT "FK_a168c3da50df59168dffdddac63" FOREIGN KEY ("equipsId") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD CONSTRAINT "FK_73078b035ddeb3088df856aeaa7" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "spells_types" ADD CONSTRAINT "FK_69fe2abb0d1ee4f8bd8fd88996c" FOREIGN KEY ("spellId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars_spells" ADD CONSTRAINT "FK_3a853cfd1d9097f8f77df2a472c" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars_spells" ADD CONSTRAINT "FK_71899a3a940b99458a1c44c7f24" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_3d57e1e5b9af0356c4374eb36ac" FOREIGN KEY ("equipId") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classes" ADD CONSTRAINT "FK_4e97160fba77fa532a92131a08e" FOREIGN KEY ("spellId") REFERENCES "spells"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "races" ADD CONSTRAINT "FK_82690aa363436b6eca10a419911" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_dd51aae30cf02206fb5b72de518" FOREIGN KEY ("classeId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_0c42fda595874a8d5dd9e892793" FOREIGN KEY ("raceId") REFERENCES "races"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chars" ADD CONSTRAINT "FK_531b200fcb65aff3dae72637773" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "charstats" ADD CONSTRAINT "FK_87268369ec3d8398157c37c539c" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_a2b158467f184debbde899ae198" FOREIGN KEY ("helm") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_09862f096d5db684e11e9e6c5a2" FOREIGN KEY ("boots") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_c825fffb123febfa15cc3d0e4fb" FOREIGN KEY ("belt") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_06eed6cb6e393f1c484cbb14753" FOREIGN KEY ("gloves") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_193c56a07dd6f0bb12781255c7e" FOREIGN KEY ("l_ring") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_5f85a427aea7da61c08b1f750ab" FOREIGN KEY ("r_ring") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_b5fc2acdc2d07c83ae1433094ad" FOREIGN KEY ("amulet") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_f5903b7f059a459c170c152df7d" FOREIGN KEY ("l_hand") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_3042e8e0aa3f692cd474d12a193" FOREIGN KEY ("r_hand") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_ecda3dab9fe1e4f27facb68368c" FOREIGN KEY ("chest_plate") REFERENCES "equips"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gear" ADD CONSTRAINT "FK_d021018170af5072249db02f86d" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "resistances" ADD CONSTRAINT "FK_183da58a3245a122595b22b47ca" FOREIGN KEY ("charId") REFERENCES "chars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_e538538dcd79b9916e7ae27d68f" FOREIGN KEY ("statsId") REFERENCES "stats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monster" ADD CONSTRAINT "FK_21ca335d08d3b433f61056ea756" FOREIGN KEY ("resistenceId") REFERENCES "resistances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" ADD CONSTRAINT "FK_69f897fcbc6a10d4de7cce883a9" FOREIGN KEY ("monsterId") REFERENCES "monster"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" ADD CONSTRAINT "FK_a157b10c39b123c15af36e68a31" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" DROP CONSTRAINT "FK_a157b10c39b123c15af36e68a31"`);
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" DROP CONSTRAINT "FK_69f897fcbc6a10d4de7cce883a9"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_21ca335d08d3b433f61056ea756"`);
        await queryRunner.query(`ALTER TABLE "monster" DROP CONSTRAINT "FK_e538538dcd79b9916e7ae27d68f"`);
        await queryRunner.query(`ALTER TABLE "resistances" DROP CONSTRAINT "FK_183da58a3245a122595b22b47ca"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_d021018170af5072249db02f86d"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_ecda3dab9fe1e4f27facb68368c"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_3042e8e0aa3f692cd474d12a193"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_f5903b7f059a459c170c152df7d"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_b5fc2acdc2d07c83ae1433094ad"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_5f85a427aea7da61c08b1f750ab"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_193c56a07dd6f0bb12781255c7e"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_06eed6cb6e393f1c484cbb14753"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_c825fffb123febfa15cc3d0e4fb"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_09862f096d5db684e11e9e6c5a2"`);
        await queryRunner.query(`ALTER TABLE "gear" DROP CONSTRAINT "FK_a2b158467f184debbde899ae198"`);
        await queryRunner.query(`ALTER TABLE "charstats" DROP CONSTRAINT "FK_87268369ec3d8398157c37c539c"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_531b200fcb65aff3dae72637773"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_0c42fda595874a8d5dd9e892793"`);
        await queryRunner.query(`ALTER TABLE "chars" DROP CONSTRAINT "FK_dd51aae30cf02206fb5b72de518"`);
        await queryRunner.query(`ALTER TABLE "races" DROP CONSTRAINT "FK_82690aa363436b6eca10a419911"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_4e97160fba77fa532a92131a08e"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_3d57e1e5b9af0356c4374eb36ac"`);
        await queryRunner.query(`ALTER TABLE "classes" DROP CONSTRAINT "FK_48ffc87e75a2ac07d37c0ce6efb"`);
        await queryRunner.query(`ALTER TABLE "chars_spells" DROP CONSTRAINT "FK_71899a3a940b99458a1c44c7f24"`);
        await queryRunner.query(`ALTER TABLE "chars_spells" DROP CONSTRAINT "FK_3a853cfd1d9097f8f77df2a472c"`);
        await queryRunner.query(`ALTER TABLE "spells_types" DROP CONSTRAINT "FK_69fe2abb0d1ee4f8bd8fd88996c"`);
        await queryRunner.query(`ALTER TABLE "spells_types" DROP CONSTRAINT "FK_73078b035ddeb3088df856aeaa7"`);
        await queryRunner.query(`ALTER TABLE "chars_equips" DROP CONSTRAINT "FK_a168c3da50df59168dffdddac63"`);
        await queryRunner.query(`ALTER TABLE "chars_equips" DROP CONSTRAINT "FK_6a950761d02e041b4b858ecb472"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a157b10c39b123c15af36e68a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_69f897fcbc6a10d4de7cce883a"`);
        await queryRunner.query(`DROP TABLE "monster_spells_spells"`);
        await queryRunner.query(`DROP TABLE "monster"`);
        await queryRunner.query(`DROP TYPE "public"."monster_rarity_enum"`);
        await queryRunner.query(`DROP TABLE "resistances"`);
        await queryRunner.query(`DROP TABLE "gear"`);
        await queryRunner.query(`DROP TABLE "charstats"`);
        await queryRunner.query(`DROP TABLE "chars"`);
        await queryRunner.query(`DROP TABLE "races"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "spells"`);
        await queryRunner.query(`DROP TABLE "chars_spells"`);
        await queryRunner.query(`DROP TABLE "spells_types"`);
        await queryRunner.query(`DROP TABLE "types"`);
        await queryRunner.query(`DROP TABLE "equips"`);
        await queryRunner.query(`DROP TYPE "public"."equips_subtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."equips_type_enum"`);
        await queryRunner.query(`DROP TABLE "chars_equips"`);
        await queryRunner.query(`DROP TABLE "stats"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
