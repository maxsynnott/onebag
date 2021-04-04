import { Router } from 'express'
import { WishListItemController } from '../controllers/WishListItemController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

const controller = new WishListItemController()

const router = Router()

const routes: RoutesObject = {
	'/wishListItems': [
		{
			method: 'post',
			handlers: [ensureAuthenticated, controller.create],
		},
	],
	'/wishListItems/:id': [
		{
			method: 'delete',
			handlers: [ensureAuthenticated, controller.delete],
		},
	],
}

applyRoutes(router, routes)

export default router
