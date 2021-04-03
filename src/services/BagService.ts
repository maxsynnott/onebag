import { getRepository } from 'typeorm'
import { isArray } from 'util'
import { Bag } from '../entities/Bag'
import { BagResponse } from '../types'

export class BagService {
	private bagRepository = getRepository(Bag)

	async findAll() {
		return this.bagRepository.find()
	}

	async findOne(id: string) {
		return this.bagRepository.findOne(id)
	}

	async create(attributes: Partial<Bag>) {
		const bag = new Bag()
		Object.assign(bag, attributes)

		return this.bagRepository.save(bag)
	}

	async update(id: string, attributes: Partial<Bag>) {
		const editedBag = { ...attributes, id }

		return this.bagRepository.save(editedBag)
	}

	async favorite(id: string, userId: string) {
		const bag = { id, favoriteUsers: [{ id: userId }] }

		return this.bagRepository.save(bag)
	}

	async unfavorite(id: string, userId: string) {
		const bag = await this.bagRepository.findOne(id, {
			relations: ['favoriteUsers'],
		})
		const updatedFavoriteUsers = bag.favoriteUsers.filter(
			(favoriteUser) => favoriteUser.id !== userId,
		)

		return this.bagRepository.save({
			...bag,
			favoriteUsers: updatedFavoriteUsers,
		})
	}

	async isFavorited(id: string, userId: string): Promise<boolean> {
		const bag = await this.bagRepository.findOne(id, {
			relations: ['favoriteUsers'],
		})
		return bag.favoriteUsers.some(
			(favoriteUser) => favoriteUser.id === userId,
		)
	}

	async mapBagToResponse(bag: Bag, userId?: string): Promise<BagResponse> {
		if (!userId) return bag

		const favorited = await this.isFavorited(bag.id, userId)
		return { ...bag, favorited }
	}

	async mapToResponseBody(
		input: Bag | Bag[],
		userId?: string,
	): Promise<BagResponse | BagResponse[]> {
		return isArray(input)
			? Promise.all(
					input.map((bag) => this.mapBagToResponse(bag, userId)),
			  )
			: this.mapBagToResponse(input)
	}
}
