import { Request, Response } from 'express'
import { BagService } from '../services/BagService'

export class BagController {
	async index(req: Request, res: Response) {
		const bagService = new BagService()

		const bags = await bagService.findAll()

		res.json(bags)
	}

	async create(req: Request, res: Response) {
		const bagService = new BagService()

		const bag = await bagService.create(req.body)

		res.json(bag)
	}
}
