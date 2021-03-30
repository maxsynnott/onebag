import {MigrationInterface, QueryRunner} from "typeorm";

export class addedItemEntity1617136408303 implements MigrationInterface {
    name = 'addedItemEntity1617136408303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "comment" character varying NOT NULL DEFAULT '', "bagId" integer, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33"`);
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
