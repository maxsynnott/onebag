import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Bag } from './Bag'
import { Item } from './Item'
import { WishListItem } from './WishlistItem'

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	username: string

	@Column()
	email: string

	@Column()
	passwordHash: string

	@OneToMany(() => Bag, (bag) => bag.user)
	bags: Bag[]

	@ManyToMany(() => Bag, (bag) => bag.favoritedByUsers)
	@JoinTable()
	favoriteBags: Bag[]

	@OneToMany(() => Item, (item) => item.user)
	items: Item[]

	@OneToMany(() => Item, (item) => item.user)
	wishListItems: WishListItem[]
}
