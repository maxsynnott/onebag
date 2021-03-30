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

	async create(attributes: Partial<Bag>, user: User) {
		const bag = new Bag()
		Object.assign(bag, attributes, { user })

		return this.bagRepository.save(bag)
	}

	async update(bag: Bag, attributes: Partial<Bag>) {
		const updatedBag = Object.assign(bag, attributes)

		return this.bagRepository.save(updatedBag)
	}
}
