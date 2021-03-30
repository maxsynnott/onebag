import { Response } from 'express'
import { ItemService } from '../services/ItemService'
import { RequestWithUser } from '../types'

export class ItemController {
	async create(req: RequestWithUser, res: Response) {
		const itemService = new ItemService()
		const attributes = { ...req.body, user: req.user }
		const item = await itemService.create(attributes)

		res.json(item)
	}
}
