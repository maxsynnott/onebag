import { Request, Response, Router } from 'express'
import passport from 'passport'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

const router = Router()

const routes: RoutesObject = {
	'/sessions': [
		{
			method: 'post',
			handlers: [
				passport.authenticate('local'),
				(req: Request, res: Response) => {
					res.json(req.user)
				},
			],
		},
		{
			method: 'delete',
			handlers: [
				(req: Request, res: Response) => {
					req.logOut()
					res.json(req.user)
				},
			],
		},
	],
}

applyRoutes(router, routes)

export default router
