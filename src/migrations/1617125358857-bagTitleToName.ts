import {MigrationInterface, QueryRunner} from "typeorm";

export class bagTitleToName1617125358857 implements MigrationInterface {
    name = 'bagTitleToName1617125358857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" RENAME COLUMN "name" TO "title"`);
    }

}
