import {MigrationInterface, QueryRunner} from "typeorm";

export class addedImagesTable1617387878407 implements MigrationInterface {
    name = 'addedImagesTable1617387878407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "path" character varying NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bag_images_image" ("bagId" uuid NOT NULL, "imageId" uuid NOT NULL, CONSTRAINT "PK_e3a857eeea7f28ed62e1116f106" PRIMARY KEY ("bagId", "imageId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f06539b8db0984b7a1a9539e43" ON "bag_images_image" ("bagId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b92a8c1ababcde5c5db2be6967" ON "bag_images_image" ("imageId") `);
        await queryRunner.query(`ALTER TABLE "bag_images_image" ADD CONSTRAINT "FK_f06539b8db0984b7a1a9539e437" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag_images_image" ADD CONSTRAINT "FK_b92a8c1ababcde5c5db2be69679" FOREIGN KEY ("imageId") REFERENCES "image"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag_images_image" DROP CONSTRAINT "FK_b92a8c1ababcde5c5db2be69679"`);
        await queryRunner.query(`ALTER TABLE "bag_images_image" DROP CONSTRAINT "FK_f06539b8db0984b7a1a9539e437"`);
        await queryRunner.query(`DROP INDEX "IDX_b92a8c1ababcde5c5db2be6967"`);
        await queryRunner.query(`DROP INDEX "IDX_f06539b8db0984b7a1a9539e43"`);
        await queryRunner.query(`DROP TABLE "bag_images_image"`);
        await queryRunner.query(`DROP TABLE "image"`);
    }

}
