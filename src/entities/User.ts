import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Bag } from './Bag'
import { Item } from './Item'

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	username: string

	@Column()
	email: string

	@Column()
	passwordHash: string

	@OneToMany(() => Bag, (bag) => bag.user)
	bags: Bag[]

	@OneToMany(() => Item, (item) => item.user)
	items: Item[]
}
