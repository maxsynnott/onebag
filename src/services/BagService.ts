import { getRepository } from 'typeorm'
import { isArray } from 'util'
import { Bag } from '../entities/Bag'
import { User } from '../entities/User'
import { BagFavoriteAttributes, BagResponse } from '../types'
import { ImageService } from './ImageService'

export class BagService {
	private bagRepository = getRepository(Bag)
	private userRepository = getRepository(User)

	async findAll() {
		return this.bagRepository.find()
	}

	async findAllByUserId(userId: string) {
		const user = await this.userRepository.findOne(userId, {
			relations: ['bags'],
		})

		return user.bags
	}

	async findOne(id: string, relations?: string[]) {
		return this.bagRepository.findOne(id, { relations })
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

	async getFavoriteAttributes(
		id: string,
		userId?: string,
	): Promise<BagFavoriteAttributes> {
		const { favoriteUsers } = await this.bagRepository.findOne(id, {
			relations: ['favoriteUsers'],
		})

		const favoriteAttributes = { favoriteCount: favoriteUsers.length }
		if (!userId) return favoriteAttributes

		const favorited = favoriteUsers.some(
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
