module.exports = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE_NAME,
	synchronize: true,
	logging: false,
	entities: ['src/entities/**/*{.ts,.js}'],
	migrations: ['src/migrations/**/*{.ts,.js}'],
	subscribers: ['src/subscribers/**/*{.ts,.js}'],
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
		subscribersDir: 'src/subscribers',
	},
}
