import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Bag } from './Bag'

@Entity()
export class Image {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	filename: string

	@ManyToMany(() => Bag, (bag) => bag.images)
	bags: Bag[]
}
