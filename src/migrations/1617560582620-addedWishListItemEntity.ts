import {MigrationInterface, QueryRunner} from "typeorm";

export class addedWishListItemEntity1617560582620 implements MigrationInterface {
    name = 'addedWishListItemEntity1617560582620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "wish_list_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "itemId" uuid, "userId" uuid, "productId" uuid, CONSTRAINT "PK_14ff4fd4879fac9397f08e34ce0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "wish_list_item" ADD CONSTRAINT "FK_6c43c0e8e8fc4b646e37e59872b" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "wish_list_item" ADD CONSTRAINT "FK_b1a22ef5b7ce260d6ae910073b9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "wish_list_item" ADD CONSTRAINT "FK_d19d5852883529084b9f9619c4d" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wish_list_item" DROP CONSTRAINT "FK_d19d5852883529084b9f9619c4d"`);
        await queryRunner.query(`ALTER TABLE "wish_list_item" DROP CONSTRAINT "FK_b1a22ef5b7ce260d6ae910073b9"`);
        await queryRunner.query(`ALTER TABLE "wish_list_item" DROP CONSTRAINT "FK_6c43c0e8e8fc4b646e37e59872b"`);
        await queryRunner.query(`DROP TABLE "wish_list_item"`);
    }

}
