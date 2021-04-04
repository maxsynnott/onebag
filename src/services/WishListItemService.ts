import { WishListItem } from '../entities/WishlistItem'
import { BaseService } from './BaseService'

export class WishListItemService extends BaseService<WishListItem> {
	constructor() {
		super(WishListItem)
	}
}
