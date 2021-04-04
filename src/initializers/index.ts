import { Application } from 'express'
import { initMiddleware } from './middlewareInitializer'
import { initPassport } from './passportInitializer'
import { initRouter } from './routerInitializer'

export const initialize = (app: Application) => {
	// Order is important
	const initFunctions = [initMiddleware, initPassport, initRouter]

	initFunctions.forEach((initFunction) => initFunction(app))
}
