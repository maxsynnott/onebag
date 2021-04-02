import { getRepository } from 'typeorm'
import { BagItem } from '../entities/BagItem'

export class BagItemService {
	private bagItemRepository = getRepository(BagItem)

	async findAllByBagId(id: string) {
		return this.bagItemRepository.find({ bag: { id } })
	}

	async create(attributes: Partial<BagItem>) {
		const bagItem = new BagItem()
		Object.assign(bagItem, attributes)

		return this.bagItemRepository.save(bagItem)
	}
}
