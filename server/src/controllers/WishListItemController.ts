import { Response } from 'express'
import { WishListItemService } from '../services/WishListItemService'
import { ExtendedRequest } from '../types'

export class WishListItemController {
	async create(req: ExtendedRequest, res: Response) {
		const wishListItemService = new WishListItemService()

		const relations = { user: { id: req.user.id } }
		const attributes = { ...req.body, ...relations }
		const wishListItem = await wishListItemService.save(attributes)

		res.json(wishListItem)
	}

	async delete(req: ExtendedRequest, res: Response) {
		const { id } = req.params

		const wishListItemService = new WishListItemService()

		await wishListItemService.delete({ id, user: { id: req.user.id } })

		res.sendStatus(204)
	}
}
