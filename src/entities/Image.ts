import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Bag } from './Bag'
import { Item } from './Item'

@Entity()
export class Image {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	filename: string

	@ManyToMany(() => Bag, (bag) => bag.images)
	bags: Bag[]

	@ManyToMany(() => Item, (item) => item.images)
	items: Item[]
}
