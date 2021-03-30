import {MigrationInterface, QueryRunner} from "typeorm";

export class addedRealtionNullableFalse1617136858717 implements MigrationInterface {
    name = 'addedRealtionNullableFalse1617136858717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33"`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "bagId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."bagId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bag" DROP CONSTRAINT "FK_313d08668a90a6284cc25b6d209"`);
        await queryRunner.query(`ALTER TABLE "bag" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "bag"."userId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bag" ADD CONSTRAINT "FK_313d08668a90a6284cc25b6d209" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" DROP CONSTRAINT "FK_313d08668a90a6284cc25b6d209"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33"`);
        await queryRunner.query(`COMMENT ON COLUMN "bag"."userId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bag" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bag" ADD CONSTRAINT "FK_313d08668a90a6284cc25b6d209" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`COMMENT ON COLUMN "item"."bagId" IS NULL`);
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "bagId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_0b3ce57a91dbc2580d15bf5ac33" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
