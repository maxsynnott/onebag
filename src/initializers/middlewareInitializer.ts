import cors from 'cors'
import { Application } from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import express from 'express'

export const initMiddleware = (app: Application) => {
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))
	app.use(cookieParser())

	app.use(
		cors({
			origin: 'http://localhost:3000',
			credentials: true,
		}),
	)

	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
		}),
	)
}
