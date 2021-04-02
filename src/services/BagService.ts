import { getRepository } from 'typeorm'
import { Bag } from '../entities/Bag'

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

	async update(bag: Bag, attributes: Partial<Bag>) {
		const updatedBag = Object.assign(bag, attributes)

		return this.bagRepository.save(updatedBag)
	}
}
