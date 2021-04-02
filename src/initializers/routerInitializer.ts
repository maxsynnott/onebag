import { Router } from 'express'
import bagItemRouter from '../routers/bagItemRouter'
import bagRouter from '../routers/bagRouter'
import itemRouter from '../routers/itemRouter'
import sessionRouter from '../routers/sessionRouter'
import userRouter from '../routers/userRouter'

export const initRouter = (app) => {
	const appRouter = Router()

	const routers = [
		bagRouter,
		itemRouter,
		sessionRouter,
		userRouter,
		bagItemRouter,
	]
	routers.forEach((router) => appRouter.use(router))

	app.use(appRouter)
}
