import { Router } from 'express'
import bagItemRouter from '../routers/bagItemRouter'
import bagRouter from '../routers/bagRouter'
import imageRouter from '../routers/imageRouter'
import itemRouter from '../routers/itemRouter'
import sessionRouter from '../routers/sessionRouter'
import staticRouter from '../routers/staticRouter'
import userRouter from '../routers/userRouter'

export const initRouter = (app) => {
	const appRouter = Router()

	const routers = [
		staticRouter,
		bagRouter,
		itemRouter,
		sessionRouter,
		userRouter,
		bagItemRouter,
		imageRouter,
	]

	routers.forEach((router) => appRouter.use(router))

	app.use(appRouter)
}
