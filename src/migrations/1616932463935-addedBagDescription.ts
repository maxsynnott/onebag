import {MigrationInterface, QueryRunner} from "typeorm";

export class addedBagDescription1616932463935 implements MigrationInterface {
    name = 'addedBagDescription1616932463935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" DROP COLUMN "description"`);
    }

}
