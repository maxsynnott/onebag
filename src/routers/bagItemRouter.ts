import { Router } from 'express'
import { BagItemController } from '../controllers/BagItemController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

const controller = new BagItemController()

const router = Router()

const routes: RoutesObject = {
	'/bags/:bagId/bagItems': [
		{ method: 'get', handlers: [controller.index] },
		{
			method: 'post',
			handlers: [ensureAuthenticated, controller.create],
		},
	],
	'/bags/:bagId/bagItems/:id': [
		{
			method: 'delete',
			handlers: [ensureAuthenticated, controller.delete],
		},
	],
}

applyRoutes(router, routes)

export default router
