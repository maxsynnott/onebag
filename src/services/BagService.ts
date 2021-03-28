import { getRepository } from 'typeorm'
import { Bag } from '../entities/Bag'

export class BagService {
	private bagRepository = getRepository(Bag)

	async findAll() {
		return this.bagRepository.find()
	}
	async findOne(id: number) {
		return this.bagRepository.findOne(id)
	}

	async create(attributes: Bag) {
		const bag = new Bag()
		Object.assign(bag, attributes)

		return this.bagRepository.save(bag)
	}
}
