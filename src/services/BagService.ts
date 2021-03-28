import { getRepository } from 'typeorm'
import { Bag } from '../entities/Bag'
import { User } from '../entities/User'

export class BagService {
	private bagRepository = getRepository(Bag)

	async findAll() {
		return this.bagRepository.find()
	}
	async findOne(id: number) {
		return this.bagRepository.findOne(id)
	}

	async create(attributes: Bag, user: User) {
		const bag = new Bag()
		Object.assign(bag, attributes)

		return this.bagRepository.save(bag)
	}
}
