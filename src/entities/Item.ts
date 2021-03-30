import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Bag } from './Bag'

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
}
