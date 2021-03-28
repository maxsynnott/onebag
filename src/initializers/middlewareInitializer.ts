import bodyParser from 'body-parser'
import cors from 'cors'
import { Application } from 'express'

export const initMiddleware = (app: Application) => {
	app.use(bodyParser.json())

	app.use(
		cors({
			origin: 'http://localhost:3000',
		}),
	)
}
