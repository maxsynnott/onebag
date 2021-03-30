import { Request, Response, Router } from 'express'
import passport from 'passport'

const router = Router()

router.post(
	'/',
	passport.authenticate('local'),
	(req: Request, res: Response) => {
		res.json(req.user)
	},
)

router.delete('/', (req: Request, res: Response) => {
	req.logOut()
	res.json(req.user)
})

export default router
