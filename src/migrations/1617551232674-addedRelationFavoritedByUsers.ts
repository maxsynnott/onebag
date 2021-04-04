import {MigrationInterface, QueryRunner} from "typeorm";

export class addedRelationFavoritedByUsers1617551232674 implements MigrationInterface {
    name = 'addedRelationFavoritedByUsers1617551232674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_favorite_bags_bag" ("userId" uuid NOT NULL, "bagId" uuid NOT NULL, CONSTRAINT "PK_457ea33242b60447bf41418e76e" PRIMARY KEY ("userId", "bagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b1612b214d5a95817a043df0e6" ON "user_favorite_bags_bag" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6a6507c11e3dde34020d1d48d2" ON "user_favorite_bags_bag" ("bagId") `);
        await queryRunner.query(`ALTER TABLE "user_favorite_bags_bag" ADD CONSTRAINT "FK_b1612b214d5a95817a043df0e60" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_favorite_bags_bag" ADD CONSTRAINT "FK_6a6507c11e3dde34020d1d48d24" FOREIGN KEY ("bagId") REFERENCES "bag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_favorite_bags_bag" DROP CONSTRAINT "FK_6a6507c11e3dde34020d1d48d24"`);
        await queryRunner.query(`ALTER TABLE "user_favorite_bags_bag" DROP CONSTRAINT "FK_b1612b214d5a95817a043df0e60"`);
        await queryRunner.query(`DROP INDEX "IDX_6a6507c11e3dde34020d1d48d2"`);
        await queryRunner.query(`DROP INDEX "IDX_b1612b214d5a95817a043df0e6"`);
        await queryRunner.query(`DROP TABLE "user_favorite_bags_bag"`);
    }

}
