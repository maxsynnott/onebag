import { Router } from 'express'
import bagRouter from '../routers/bagRouter'
import itemRouter from '../routers/itemRouter'
import sessionRouter from '../routers/sessionRouter'
import userRouter from '../routers/userRouter'

export const initRouter = (app) => {
	const router = Router()
	router.use('/bags', bagRouter)
	router.use('/users', userRouter)
	router.use('/sessions', sessionRouter)
	router.use('/items', itemRouter)

	app.use(router)
}
