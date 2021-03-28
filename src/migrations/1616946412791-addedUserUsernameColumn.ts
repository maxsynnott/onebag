import { MigrationInterface, QueryRunner } from 'typeorm'

export class addedUserUsernameColumn1616946412791
	implements MigrationInterface {
	name = 'addedUserUsernameColumn1616946412791'

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "user" ADD "username" character varying NOT NULL`,
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`)
	}
}
