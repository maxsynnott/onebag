import {MigrationInterface, QueryRunner} from "typeorm";

export class addedItemImageRelation1617438924551 implements MigrationInterface {
    name = 'addedItemImageRelation1617438924551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item_images_image" ("itemId" uuid NOT NULL, "imageId" uuid NOT NULL, CONSTRAINT "PK_a499e5911cb7efa194b3f7b4686" PRIMARY KEY ("itemId", "imageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2dc4d49493734f5a15356be388" ON "item_images_image" ("itemId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9278dafea55acc617df8c8f7a7" ON "item_images_image" ("imageId") `);
        await queryRunner.query(`ALTER TABLE "item_images_image" ADD CONSTRAINT "FK_2dc4d49493734f5a15356be388b" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_images_image" ADD CONSTRAINT "FK_9278dafea55acc617df8c8f7a7d" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_images_image" DROP CONSTRAINT "FK_9278dafea55acc617df8c8f7a7d"`);
        await queryRunner.query(`ALTER TABLE "item_images_image" DROP CONSTRAINT "FK_2dc4d49493734f5a15356be388b"`);
        await queryRunner.query(`DROP INDEX "IDX_9278dafea55acc617df8c8f7a7"`);
        await queryRunner.query(`DROP INDEX "IDX_2dc4d49493734f5a15356be388"`);
        await queryRunner.query(`DROP TABLE "item_images_image"`);
    }

}
