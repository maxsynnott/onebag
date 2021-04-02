import { getRepository } from 'typeorm'
import { Item } from '../entities/Item'

export class ItemService {
	private itemRepository = getRepository(Item)

	async findOne(id: string) {
		return this.itemRepository.findOne(id)
	}

	async findAllByUserId(id: string) {
		return this.itemRepository.find({ user: { id } })
	}

	async create(attributes: Partial<Item>) {
		const item = new Item()
		Object.assign(item, attributes)

		return this.itemRepository.save(item)
	}

	async deleteById(id: string) {
		return this.itemRepository.delete(id)
	}
}
