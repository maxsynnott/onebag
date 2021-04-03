import { Response } from 'express'
import { BagService } from '../services/BagService'
import { ExtendedRequest } from '../types'

export class BagController {
	async index(req: ExtendedRequest, res: Response) {
		const bagService = new BagService()

		const bags = await bagService.findAll()

		const responseBody = await bagService.mapToResponseBody(
			bags,
			req.user?.id,
		)
		res.json(responseBody)
	}

	async userIndex(req: ExtendedRequest, res: Response) {
		const { userId } = req.params

		const bagService = new BagService()

		const bags = await bagService.findAllByUserId(userId)

		const responseBody = await bagService.mapToResponseBody(
			bags,
			req.user?.id,
		)
		res.json(responseBody)
	}

	async create(req: ExtendedRequest, res: Response) {
		const bagService = new BagService()

		const relations = { user: req.user }
		const attributes = { ...req.body, ...relations }
		const bag = await bagService.create(attributes)

		const responseBody = await bagService.mapToResponseBody(
			bag,
			req.user?.id,
		)
		res.json(responseBody)
	}

	// TODO: Ensure user owns bag
	async update(req: ExtendedRequest, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const attributes = req.body
		const bag = await bagService.update(id, attributes)

		const responseBody = await bagService.mapToResponseBody(
			bag,
			req.user?.id,
		)
		res.json(responseBody)
	}

	async show(req: ExtendedRequest, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const bag = await bagService.findOne(id)

		const responseBody = await bagService.mapToResponseBody(
			bag,
			req.user?.id,
		)
		res.json(responseBody)
	}

	async favorite(req: ExtendedRequest, res: Response) {
		const { id } = req.params
		const { id: userId } = req.user

		const bagService = new BagService()

		const bag = await bagService.favorite(id, userId)

		const responseBody = await bagService.mapToResponseBody(
			bag,
			req.user?.id,
		)
		res.json(responseBody)
	}

	async unfavorite(req: ExtendedRequest, res: Response) {
		const { id } = req.params
		const { id: userId } = req.user

		const bagService = new BagService()

		const bag = await bagService.unfavorite(id, userId)

		const responseBody = await bagService.mapToResponseBody(
			bag,
			req.user?.id,
		)
		res.json(responseBody)
	}
}
