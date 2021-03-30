import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Bag {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ default: '' })
	description: string

	@ManyToOne(() => User, (user) => user.bags)
	user: User
}
