import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
	async create(req: Request, res: Response) {
		const userService = new UserService()

		const user = await userService.create(req.body)

		res.json(user)
	}
}
