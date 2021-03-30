import { Router } from 'express'
import bagRoutes from '../routers/bagRouter'
import itemRoutes from '../routers/itemRouter'
import sessionRoutes from '../routers/sessionRouter'
import userRoutes from '../routers/userRouter'

export const initRouter = (app) => {
	const router = Router()

	const reducedRouteObject = getReducedRouteObject()
	applyRouteObject(router, reducedRouteObject)

	app.use(router)
}

const getReducedRouteObject = () => {
	const routeObjects = [bagRoutes, userRoutes, sessionRoutes, itemRoutes]

	return routeObjects.reduce((acc, curr) => {
		Object.keys(curr).forEach((routePath) => {
			acc[routePath] = {
				...acc[routePath],
				...curr[routePath],
			}
		})
		return acc
	}, {})
}

const applyRouteObject = (router, routeObject) => {
	Object.entries(routeObject).forEach(([routePath, methods]) => {
		Object.entries(methods).forEach(([method, middlewares]) => {
			router[method](routePath, ...middlewares)
		})
	})
}
