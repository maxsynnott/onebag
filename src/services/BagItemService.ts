import { FindManyOptions } from 'typeorm'
import { BagItem } from '../entities/BagItem'
import { BaseService } from './BaseService'

export class BagItemService extends BaseService<BagItem> {
	constructor() {
		super(BagItem)
	}

	async findAllByBagId(bagId: string, options: FindManyOptions<BagItem>) {
		const where = { bag: { id: bagId } }
		return this.repository.find({ where, ...options })
	}
}
