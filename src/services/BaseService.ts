import {
	DeepPartial,
	FindConditions,
	FindManyOptions,
	FindOneOptions,
	getRepository,
	Repository,
} from 'typeorm'
import { Class } from '../types'

export class BaseService<Entity> {
	repository: Repository<Entity>

	constructor(entityClass: Class<Entity>) {
		this.repository = getRepository(entityClass)
	}

	async findAll(options: FindManyOptions<Entity>) {
		return this.repository.find(options)
	}

	async findOne(id: string, options: FindOneOptions<Entity>) {
		return this.repository.findOne(id, options)
	}

	create(attributes: DeepPartial<Entity>) {
		return this.repository.create(attributes)
	}

	async save(attributes: DeepPartial<Entity>) {
		return this.repository.save(attributes)
	}

	async delete(criteria: string | FindConditions<Entity>) {
		return this.repository.delete(criteria)
	}
}
