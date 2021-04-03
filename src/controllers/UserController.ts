import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { ExtendedRequest } from '../types'

export class UserController {
	async create(req: Request, res: Response) {
		const userService = new UserService()

		const user = await userService.create(req.body)

		const responseBody = userService.mapToResponseBody(user)
		res.json(responseBody)
	}

	async current(req: ExtendedRequest, res: Response) {
		if (!req.user) return res.json(null)

		const userService = new UserService()

		const responseBody = userService.mapToResponseBody(req.user)
		res.json(responseBody)
	}
}
