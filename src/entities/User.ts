import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Bag } from './Bag'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	username: string

	@Column()
	email: string

	@Column()
	passwordHash: string

	@OneToMany(() => Bag, (bag) => bag.user)
	bags: Bag[]
}
