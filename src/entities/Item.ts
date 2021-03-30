import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	ManyToOne,
} from 'typeorm'
import { Bag } from './Bag'
import { Product } from './Product'

@Entity()
export class Item {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ default: '' })
	comment: string

	@ManyToMany(() => Bag, (bag) => bag.items)
	bags: Bag[]

	@ManyToOne(() => Product, (product) => product.items)
	product: Product
}
