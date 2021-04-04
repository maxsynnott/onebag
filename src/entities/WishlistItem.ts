import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Item } from './Item'
import { Product } from './Product'
import { User } from './User'

@Entity()
export class WishListItem {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@ManyToOne(() => Item, (item) => item.wishListItems)
	item: Item

	@ManyToOne(() => User, (user) => user.wishListItems)
	user: User

	@ManyToOne(() => Product, (product) => product.wishListItems)
	product: Product
}
