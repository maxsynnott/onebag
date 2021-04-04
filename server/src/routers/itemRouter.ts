import { Router } from 'express'
import { ItemController } from '../controllers/ItemController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

const controller = new ItemController()

const router = Router()

const routes: RoutesObject = {
	'/items': [
		{
			method: 'post',
			handlers: [ensureAuthenticated, controller.create],
		},
	],
	'/items/:id': [
		{
			method: 'delete',
			handlers: [ensureAuthenticated, controller.delete],
		},
	],
}

applyRoutes(router, routes)

export default router
