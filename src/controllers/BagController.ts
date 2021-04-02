import { Request, Response } from 'express'
import { BagService } from '../services/BagService'
import { RequestWithUser } from '../types'

export class BagController {
	async index(req: Request, res: Response) {
		const bagService = new BagService()

		const bags = await bagService.findAll()

		res.json(bags)
	}

	async create(req: RequestWithUser, res: Response) {
		const bagService = new BagService()

		const relations = { user: req.user }
		const attributes = { ...req.body, ...relations }
		const bag = await bagService.create(attributes)

		res.json(bag)
	}

	// TODO: Ensure user owns bag
	async update(req: RequestWithUser, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const attributes = req.body
		const bag = await bagService.update(id, attributes)

		res.json(bag)
	}

	async show(req: Request, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const bag = await bagService.findOne(id)

		res.json(bag)
	}
}
