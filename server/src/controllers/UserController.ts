import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { ExtendedRequest } from '../types'
import { extractRelations } from './helpers'

export class UserController {
	async create(req: Request, res: Response) {
		const { email, username, password } = req.body

		const userService = new UserService()

		const user = await userService.saveNewUser(email, username, password)

		const responseBody = userService.mapToResponseBody(user)
		res.json(responseBody)
	}

	async current(req: ExtendedRequest, res: Response) {
		let user = req.user
		if (!user) return res.json(null)

		const userService = new UserService()

		const relations = extractRelations(req)
		if (relations) user = await userService.findOne(user.id, { relations })

		const responseBody = userService.mapToResponseBody(user)
		res.json(responseBody)
	}
}
