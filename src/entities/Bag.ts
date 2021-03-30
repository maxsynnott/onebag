import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
} from 'typeorm'
import { BagItem } from './BagItem'
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

	@OneToMany(() => BagItem, (bagItem) => bagItem.bag)
	bagItems: BagItem[]
}
