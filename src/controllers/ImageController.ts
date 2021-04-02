import { Request, Response } from 'express'
import { ImageService } from '../services/ImageService'
import { RequestWithUser } from '../types'

export class ImageController {
	async bagIndex(req: Request, res: Response) {
		const { bagId } = req.params

		const imageService = new ImageService()

		const images = await imageService.findAllByBagId(bagId)

		const body = imageService.mapImagesToResponseBody(images)
		res.json(body)
	}

	async createBagImage(req: RequestWithUser, res: Response) {
		const { bagId } = req.params
		const { filename } = req.file

		const imageService = new ImageService()

		const relations = { bags: [{ id: bagId }] }
		const attributes = { filename, ...relations }
		const image = await imageService.create(attributes)

		const body = imageService.mapImageToResponseBody(image)
		res.json(body)
	}
}
