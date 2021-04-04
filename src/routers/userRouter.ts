import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

const controller = new UserController()

const router = Router()

const routes: RoutesObject = {
	'/users': [
		{
			method: 'post',
			handlers: [controller.create],
		},
	],
	'/users/current': [
		{
			method: 'get',
			handlers: [controller.current],
		},
	],
}

applyRoutes(router, routes)

export default router
