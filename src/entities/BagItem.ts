import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Bag } from './Bag'
import { Item } from './Item'

@Entity()
export class BagItem {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ default: '' })
	comment: string

	@Column({ default: 1 })
	quantity: number

	@ManyToOne(() => Bag, (bag) => bag.bagItems)
	bag: Bag

	@ManyToOne(() => Item, (item) => item.bagItems)
	item: Item
}
