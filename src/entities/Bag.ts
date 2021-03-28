import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Bag {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column()
	description: string
}
