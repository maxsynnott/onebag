import {MigrationInterface, QueryRunner} from "typeorm";

export class addBagModel1616929795873 implements MigrationInterface {
    name = 'addBagModel1616929795873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bag" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_6e681d0246f71dc274b5a5d9955" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "bag"`);
    }

}
