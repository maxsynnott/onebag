import {MigrationInterface, QueryRunner} from "typeorm";

export class imagePathToFilename1617388712587 implements MigrationInterface {
    name = 'imagePathToFilename1617388712587'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" RENAME COLUMN "path" TO "filename"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" RENAME COLUMN "filename" TO "path"`);
    }

}
