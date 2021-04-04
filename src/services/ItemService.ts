import { Item } from '../entities/Item'
import { BaseService } from './BaseService'

export class ItemService extends BaseService<Item> {
	constructor() {
		super(Item)
	}
}
