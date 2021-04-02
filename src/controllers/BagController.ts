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

		const attributes = req.body
		const user = req.user
		const bag = await bagService.create(attributes, user)

		res.json(bag)
	}

	// TODO: Ensure user owns bag
	async update(req: RequestWithUser, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const attributes = req.body
		let bag = await bagService.findOne(id)
		bag = await bagService.update(bag, attributes)

		res.json(bag)
	}

	async show(req: Request, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const bag = await bagService.findOne(id)

		res.json(bag)
	}
}
