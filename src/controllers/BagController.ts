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

		const bag = await bagService.create(req.body, req.user)

		res.json(bag)
	}

	async show(req: Request, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const bag = await bagService.findOne(Number(id))

		res.json(bag)
	}
}
