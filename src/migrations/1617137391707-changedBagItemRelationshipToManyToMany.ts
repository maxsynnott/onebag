import {MigrationInterface, QueryRunner} from "typeorm";

export class changedBagItemRelationshipToManyToMany1617137391707 implements MigrationInterface {
    name = 'changedBagItemRelationshipToManyToMany1617137391707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33"`);
        await queryRunner.query(`CREATE TABLE "bag_items_item" ("bagId" integer NOT NULL, "itemId" integer NOT NULL, CONSTRAINT "PK_8db54e14098bcd52042d97c387b" PRIMARY KEY ("bagId", "itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ce17f32b73640837dc76d039df" ON "bag_items_item" ("bagId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f9d50e93b9e8ae3d49bdf7b10d" ON "bag_items_item" ("itemId") `);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "bagId"`);
        await queryRunner.query(`ALTER TABLE "bag_items_item" ADD CONSTRAINT "FK_ce17f32b73640837dc76d039df8" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag_items_item" ADD CONSTRAINT "FK_f9d50e93b9e8ae3d49bdf7b10d4" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag_items_item" DROP CONSTRAINT "FK_f9d50e93b9e8ae3d49bdf7b10d4"`);
        await queryRunner.query(`ALTER TABLE "bag_items_item" DROP CONSTRAINT "FK_ce17f32b73640837dc76d039df8"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "bagId" integer NOT NULL`);
        await queryRunner.query(`DROP INDEX "IDX_f9d50e93b9e8ae3d49bdf7b10d"`);
        await queryRunner.query(`DROP INDEX "IDX_ce17f32b73640837dc76d039df"`);
        await queryRunner.query(`DROP TABLE "bag_items_item"`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
