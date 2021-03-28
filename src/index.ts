import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'
import bodyParser from 'body-parser'
import { router } from './routers'

createConnection()
	.then(async () => {
		// create express app
		const app = express()
		app.use(bodyParser.json())

		app.use(router)

		const port = process.env.PORT || 8080
		app.listen(port, () => {
			console.log('Listening on port: ' + port)
		})
	})
	.catch((error) => console.log(error))
