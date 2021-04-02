import { getRepository } from 'typeorm'
import { Bag } from '../entities/Bag'

export class BagService {
	private bagRepository = getRepository(Bag)

	async findAll() {
		return this.bagRepository.find({ relations: ['images'] })
	}

	async findOne(id: string) {
		return this.bagRepository.findOne(id)
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
}
