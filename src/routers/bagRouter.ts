import { Router } from 'express'
import { BagController } from '../controllers/BagController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

const controller = new BagController()

const router = Router()

const routes: RoutesObject = {
	'/bags': [
		{
			method: 'get',
			handlers: [controller.index],
		},
		{
			method: 'post',
			handlers: [ensureAuthenticated, controller.create],
		},
	],
	'/bags/:id': [
		{
			method: 'get',
			handlers: [controller.show],
		},
		{
			method: 'patch',
			handlers: [ensureAuthenticated, controller.update],
		},
	],
}

applyRoutes(router, routes)

export default router
