import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Bag } from './Bag'

@Entity()
export class Item {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ default: '' })
	comment: string

	@ManyToOne(() => Bag, (bag) => bag.items, { nullable: false })
	bag: Bag
}
