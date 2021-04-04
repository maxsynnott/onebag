import { Response } from 'express'
import { BagService } from '../services/BagService'
import { UserService } from '../services/UserService'
import { ExtendedRequest } from '../types'
import { extractRelations } from './helpers'

export class BagController {
	async index(req: ExtendedRequest, res: Response) {
		const bagService = new BagService()

		const relations = extractRelations(req)
		const bags = await bagService.findAll({ relations })

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
		const bag = await bagService.save(attributes)

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

		const attributes = { ...req.body, id }
		const bag = await bagService.save(attributes)

		const responseBody = await bagService.mapToResponseBody(
			bag,
			req.user?.id,
		)
		res.json(responseBody)
	}

	async show(req: ExtendedRequest, res: Response) {
		const { id } = req.params

		const bagService = new BagService()

		const relations = extractRelations(req)
		const bag = await bagService.findOne(id, { relations })

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
