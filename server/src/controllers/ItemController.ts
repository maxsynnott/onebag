import { NextFunction, Response } from 'express'
import { ItemService } from '../services/ItemService'
import { ExtendedRequest } from '../types'

export class ItemController {
	async create(req: ExtendedRequest, res: Response) {
		const itemService = new ItemService()
		const attributes = { ...req.body, user: req.user }
		const item = await itemService.save(attributes)

		res.json(item)
	}

	async delete(req: ExtendedRequest, res: Response) {
		const { id } = req.params

		const itemService = new ItemService()

		await itemService.delete(id)

		res.sendStatus(204)
	}
}
