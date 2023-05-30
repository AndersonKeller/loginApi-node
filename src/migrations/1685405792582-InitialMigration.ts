import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1685405792582 implements MigrationInterface {
    name = 'InitialMigration1685405792582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "monster_spells_spells" ("monsterId" integer NOT NULL, "spellsId" integer NOT NULL, CONSTRAINT "PK_7c7e65d540f241fbe360c8cc1ab" PRIMARY KEY ("monsterId", "spellsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_69f897fcbc6a10d4de7cce883a" ON "monster_spells_spells" ("monsterId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a157b10c39b123c15af36e68a3" ON "monster_spells_spells" ("spellsId") `);
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" ADD CONSTRAINT "FK_69f897fcbc6a10d4de7cce883a9" FOREIGN KEY ("monsterId") REFERENCES "monster"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" ADD CONSTRAINT "FK_a157b10c39b123c15af36e68a31" FOREIGN KEY ("spellsId") REFERENCES "spells"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" DROP CONSTRAINT "FK_a157b10c39b123c15af36e68a31"`);
        await queryRunner.query(`ALTER TABLE "monster_spells_spells" DROP CONSTRAINT "FK_69f897fcbc6a10d4de7cce883a9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a157b10c39b123c15af36e68a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_69f897fcbc6a10d4de7cce883a"`);
        await queryRunner.query(`DROP TABLE "monster_spells_spells"`);
    }

}
