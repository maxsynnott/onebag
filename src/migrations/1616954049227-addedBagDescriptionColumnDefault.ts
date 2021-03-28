import {MigrationInterface, QueryRunner} from "typeorm";

export class addedBagDescriptionColumnDefault1616954049227 implements MigrationInterface {
    name = 'addedBagDescriptionColumnDefault1616954049227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "bag"."description" IS NULL`);
        await queryRunner.query(`ALTER TABLE "bag" ALTER COLUMN "description" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" ALTER COLUMN "description" DROP DEFAULT`);
        await queryRunner.query(`COMMENT ON COLUMN "bag"."description" IS NULL`);
    }

}
