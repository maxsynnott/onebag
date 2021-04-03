import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { ExtendedRequest } from '../types'

export class UserController {
	async create(req: Request, res: Response) {
		const userService = new UserService()

		const user = await userService.create(req.body)
		res.json(user)
	}

	async current(req: ExtendedRequest, res: Response) {
		if (!req.user) return res.json(null)

		const { passwordHash, ...filteredUser } = req.user
		res.json(filteredUser)
	}
}
