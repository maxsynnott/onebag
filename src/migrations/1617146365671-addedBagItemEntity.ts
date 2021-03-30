import {MigrationInterface, QueryRunner} from "typeorm";

export class addedBagItemEntity1617146365671 implements MigrationInterface {
    name = 'addedBagItemEntity1617146365671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bag_item" ("id" SERIAL NOT NULL, "comment" character varying NOT NULL DEFAULT '', "quantity" integer NOT NULL DEFAULT '1', "bagId" integer, "itemId" integer, CONSTRAINT "PK_f8bcc64dfcace9f15ff94bacc63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "comment"`);
        await queryRunner.query(`ALTER TABLE "bag_item" ADD CONSTRAINT "FK_95cc58b8a2cdeb166a0a91f3846" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag_item" ADD CONSTRAINT "FK_2bb61c1418a015548a1f00ee24d" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag_item" DROP CONSTRAINT "FK_2bb61c1418a015548a1f00ee24d"`);
        await queryRunner.query(`ALTER TABLE "bag_item" DROP CONSTRAINT "FK_95cc58b8a2cdeb166a0a91f3846"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "comment" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`DROP TABLE "bag_item"`);
    }

}
