import { getRepository } from 'typeorm'
import { Item } from '../entities/Item'

export class ItemService {
	private itemRepository = getRepository(Item)

	async create(attributes: Partial<Item>) {
		const item = new Item()
		Object.assign(item, attributes)

		return this.itemRepository.save(item)
	}
}
