import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Item } from './Item'
import { WishListItem } from './WishlistItem'

@Entity()
export class Product {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column({ nullable: true })
	affiliateLink: string

	@OneToMany(() => Item, (item) => item.product)
	items: Item[]

	@OneToMany(() => WishListItem, (wishListItem) => wishListItem.product)
	wishListItems: WishListItem[]
}
