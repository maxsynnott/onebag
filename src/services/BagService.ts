import { getRepository } from 'typeorm'
import { Bag } from '../entities/Bag'

export class BagService {
	private bagRepository = getRepository(Bag)

	async findAll() {
		return this.bagRepository.find()
	}
}
