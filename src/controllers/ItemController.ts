import { NextFunction, Response } from 'express'
import { ItemService } from '../services/ItemService'
import { RequestWithUser } from '../types'

export class ItemController {
	async userIndex(req: RequestWithUser, res: Response, next: NextFunction) {
		const { userId } = req.params

		const itemService = new ItemService()

		const items = await itemService.findAllByUserId(userId)
		res.json(items)
	}

	async create(req: RequestWithUser, res: Response) {
		const itemService = new ItemService()
		const attributes = { ...req.body, user: req.user }
		const item = await itemService.create(attributes)

		res.json(item)
	}

	async delete(req: RequestWithUser, res: Response) {
		const { id } = req.params

		const itemService = new ItemService()

		await itemService.deleteById(id)

		res.sendStatus(204)
	}
}
