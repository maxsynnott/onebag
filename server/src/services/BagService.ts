import { isArray } from 'util'
import { Bag } from '../entities/Bag'
import { BagFavoriteAttributes, BagResponse } from '../types'
import { BaseService } from './BaseService'
import { ImageService } from './ImageService'

export class BagService extends BaseService<Bag> {
	constructor() {
		super(Bag)
	}

	async favorite(id: string, userId: string) {
		return this.repository.save({ id, favoritedByUsers: [{ id: userId }] })
	}

	async unfavorite(id: string, userId: string) {
		const bag = await this.repository.findOne(id, {
			relations: ['favoritedByUsers'],
		})
		const updatedFavoritedByUsers = bag.favoritedByUsers.filter(
			(favoritedByUser) => favoritedByUser.id !== userId,
		)
		bag.favoritedByUsers = updatedFavoritedByUsers

		return this.repository.save(bag)
	}

	async getFavoriteAttributes(
		id: string,
		userId?: string,
	): Promise<BagFavoriteAttributes> {
		const { favoritedByUsers } = await this.repository.findOne(id, {
			relations: ['favoritedByUsers'],
		})

		const favoriteAttributes = { favoriteCount: favoritedByUsers.length }
		if (!userId) return favoriteAttributes

		const favorited = favoritedByUsers.some(
			(favoriteUser) => favoriteUser.id === userId,
		)
		return { ...favoriteAttributes, favorited }
	}

	async mapBagToResponse(bag: Bag, userId?: string): Promise<BagResponse> {
		const favoriteAttributes = await this.getFavoriteAttributes(
			bag.id,
			userId,
		)
		const extraAttributes = { ...favoriteAttributes }

		const relations = {}
		if (bag.images) {
			const imageService = new ImageService()
			relations['images'] = imageService.mapToResponseBody(bag.images)
		}

		return { ...bag, ...extraAttributes, ...relations }
	}

	async mapToResponseBody(
		input: Bag | Bag[],
		userId?: string,
	): Promise<BagResponse | BagResponse[]> {
		return isArray(input)
			? Promise.all(
					input.map((bag) => this.mapBagToResponse(bag, userId)),
			  )
			: this.mapBagToResponse(input, userId)
	}
}
