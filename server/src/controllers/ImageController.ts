import { Request, Response } from 'express'
import { ImageService } from '../services/ImageService'
import { ExtendedRequest } from '../types'

export class ImageController {
	async createBagImage(req: ExtendedRequest, res: Response) {
		const { bagId } = req.params
		const { filename } = req.file

		const imageService = new ImageService()

		const relations = { bags: [{ id: bagId }] }
		const attributes = { filename, ...relations }
		const image = await imageService.save(attributes)

		const body = imageService.mapToResponseBody(image)
		res.json(body)
	}

	async createItemImage(req: ExtendedRequest, res: Response) {
		const { itemId } = req.params
		const { filename } = req.file

		const imageService = new ImageService()

		const relations = { items: [{ id: itemId }] }
		const attributes = { filename, ...relations }
		const image = await imageService.save(attributes)

		const body = imageService.mapToResponseBody(image)
		res.json(body)
	}
}
