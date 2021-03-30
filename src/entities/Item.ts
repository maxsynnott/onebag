import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
} from 'typeorm'
import { BagItem } from './BagItem'
import { Product } from './Product'

@Entity()
export class Item {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@ManyToOne(() => Product, (product) => product.items)
	product: Product

	@OneToMany(() => BagItem, (bagItem) => bagItem.item)
	bagItems: BagItem[]
}
