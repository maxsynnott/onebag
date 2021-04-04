import { Request, Response, NextFunction } from 'express'

export default function ensureAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (req.isAuthenticated()) return next()
	res.sendStatus(401)
}
