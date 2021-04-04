import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { BagItem } from './BagItem'
import { Image } from './Image'
import { User } from './User'

@Entity()
export class Bag {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column({ default: '' })
	description: string

	@ManyToOne(() => User, (user) => user.bags, { nullable: false })
	user: User

	@OneToMany(() => BagItem, (bagItem) => bagItem.bag)
	bagItems: BagItem[]

	@ManyToMany(() => Image, (image) => image.bags)
	@JoinTable()
	images: Image[]

	@ManyToMany(() => User, (user) => user.favoriteBags)
	favoritedByUsers: User[]
}
