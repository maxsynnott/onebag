import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1617364924857 implements MigrationInterface {
    name = 'initialMigration1617364924857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "affiliateLink" character varying, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "email" character varying NOT NULL, "passwordHash" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "productId" uuid, "userId" uuid, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bag_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying NOT NULL DEFAULT '', "quantity" integer NOT NULL DEFAULT '1', "bagId" uuid, "itemId" uuid, CONSTRAINT "PK_f8bcc64dfcace9f15ff94bacc63" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bag" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "userId" uuid NOT NULL, CONSTRAINT "PK_6e681d0246f71dc274b5a5d9955" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_ab25455f602addda94c12635c60" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag_item" ADD CONSTRAINT "FK_95cc58b8a2cdeb166a0a91f3846" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag_item" ADD CONSTRAINT "FK_2bb61c1418a015548a1f00ee24d" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag" ADD CONSTRAINT "FK_313d08668a90a6284cc25b6d209" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" DROP CONSTRAINT "FK_313d08668a90a6284cc25b6d209"`);
        await queryRunner.query(`ALTER TABLE "bag_item" DROP CONSTRAINT "FK_2bb61c1418a015548a1f00ee24d"`);
        await queryRunner.query(`ALTER TABLE "bag_item" DROP CONSTRAINT "FK_95cc58b8a2cdeb166a0a91f3846"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_5369db3bd33839fd3b0dd5525d1"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_ab25455f602addda94c12635c60"`);
        await queryRunner.query(`DROP TABLE "bag"`);
        await queryRunner.query(`DROP TABLE "bag_item"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
