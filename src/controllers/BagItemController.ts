import { Request, Response } from 'express'
import { BagItemService } from '../services/BagItemService'
import { RequestWithUser } from '../types'

export class BagItemController {
	async index(req: Request, res: Response) {
		const { bagId } = req.params

		const bagItemService = new BagItemService()

		const bagItems = await bagItemService.findAllByBagId(bagId)

		res.json(bagItems)
	}

	async create(req: RequestWithUser, res: Response) {
		const { bagId } = req.params

		const bagItemService = new BagItemService()
		const relations = { bag: { id: bagId } }
		const attributes = { ...req.body, ...relations }

		const bagItem = await bagItemService.create(attributes)

		res.json(bagItem)
	}

	async delete(req: RequestWithUser, res: Response) {
		const { bagId, id } = req.params

		const bagItemService = new BagItemService()

		await bagItemService.deleteByFindConditions({ id, bag: { id: bagId } })

		res.sendStatus(204)
	}
}
