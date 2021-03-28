import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import { router } from './routers'
import { initialize } from './initializers'

createConnection()
	.then(async () => {
		// create express app
		const app = express()

		initialize(app)

		app.use(router)

		const port = process.env.PORT || 8080
		app.listen(port, () => {
			console.log('Listening on port: ' + port)
		})
	})
	.catch((error) => console.log(error))
