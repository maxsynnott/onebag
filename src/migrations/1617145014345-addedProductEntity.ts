import {MigrationInterface, QueryRunner} from "typeorm";

export class addedProductEntity1617145014345 implements MigrationInterface {
    name = 'addedProductEntity1617145014345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "affiliateLink" character varying, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_ab25455f602addda94c12635c60" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_ab25455f602addda94c12635c60"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "productId"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
