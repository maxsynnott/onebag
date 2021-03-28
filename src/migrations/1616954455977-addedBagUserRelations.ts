import {MigrationInterface, QueryRunner} from "typeorm";

export class addedBagUserRelations1616954455977 implements MigrationInterface {
    name = 'addedBagUserRelations1616954455977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "bag" ADD CONSTRAINT "FK_313d08668a90a6284cc25b6d209" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bag" DROP CONSTRAINT "FK_313d08668a90a6284cc25b6d209"`);
        await queryRunner.query(`ALTER TABLE "bag" DROP COLUMN "userId"`);
    }

}
