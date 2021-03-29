module.exports = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE_NAME,
	synchronize: true,
	logging: false,
	entities: ['src/entities/**/*.ts'],
	migrations: ['src/migrations/**/*.ts'],
	subscribers: ['src/subscribers/**/*.ts'],
	cli: {
		entitiesDir: 'src/entities',
		migrationsDir: 'src/migrations',
		subscribersDir: 'src/subscribers',
	},
}
