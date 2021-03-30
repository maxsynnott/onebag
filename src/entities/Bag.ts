import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinTable,
	ManyToMany,
} from 'typeorm'
import { Item } from './Item'
import { User } from './User'

@Entity()
export class Bag {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column({ default: '' })
	description: string

	@ManyToOne(() => User, (user) => user.bags, { nullable: false })
	user: User

	@ManyToMany(() => Item, (item) => item.bags)
	@JoinTable()
	items: Item[]
}
