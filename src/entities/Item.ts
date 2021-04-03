import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { BagItem } from './BagItem'
import { Image } from './Image'
import { Product } from './Product'
import { User } from './User'

@Entity()
export class Item {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@ManyToOne(() => Product, (product) => product.items)
	product: Product

	@ManyToOne(() => User, (user) => user.items)
	user: User

	@OneToMany(() => BagItem, (bagItem) => bagItem.item)
	bagItems: BagItem[]

	@ManyToMany(() => Image, (image) => image.items)
	@JoinTable()
	images: Image[]
}
