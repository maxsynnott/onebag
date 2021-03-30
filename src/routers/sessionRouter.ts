import { Request, Response } from 'express'
import passport from 'passport'

export default {
	'/sessions': {
		post: [
			passport.authenticate('local'),
			(req: Request, res: Response) => {
				res.json(req.user)
			},
		],
		delete: [
			(req: Request, res: Response) => {
				req.logOut()
				res.json(req.user)
			},
		],
	},
}
