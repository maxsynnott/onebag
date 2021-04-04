import { config } from 'dotenv'
config()

import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import { initialize } from './initializers'

createConnection()
	.then(async () => {
		// create express app
		const app = express()

		initialize(app)

		const port = process.env.PORT || 8080
		app.listen(port, () => {
			console.log('Listening on port: ' + port)
		})
	})
	.catch((error) => console.log(error))
