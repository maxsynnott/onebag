import { FindConditions, getRepository } from 'typeorm'
import { BagItem } from '../entities/BagItem'

export class BagItemService {
	private bagItemRepository = getRepository(BagItem)

	async findAllByBagId(bagId: string) {
		return this.bagItemRepository.find({ bag: { id: bagId } })
	}

	async create(attributes: Partial<BagItem>) {
		const bagItem = new BagItem()
		Object.assign(bagItem, attributes)

		return this.bagItemRepository.save(bagItem)
	}

	async deleteByFindConditions(findConditions: FindConditions<BagItem>) {
		return this.bagItemRepository.delete(findConditions)
	}
}
