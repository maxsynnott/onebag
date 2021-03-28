import { Application } from 'express'
import { initMiddleware } from './middlewareInitializer'

export const initialize = (app: Application) => {
	// Order is important
	const initFunctions = [initMiddleware]

	initFunctions.forEach((initFunction) => initFunction(app))
}
