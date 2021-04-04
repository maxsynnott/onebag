export interface Bag extends Partial<BagRelations> {
	id: string
	name: string
	description: string
	favoriteCount: number
	favorited?: boolean
}

interface BagRelations {
	images: Image[]
}

export interface User {
	id: string
	username: string
	email: string
	avatarUrl: string
}

export interface Item {
	id: string
	name: string
}

export interface BagItem extends Partial<BagItemRelations> {
	id: string
	comment: string
	quantity: number
}

interface BagItemRelations {
	item: Item
	bag: Bag
}

export interface Image {
	id: string
	url: string
}

export interface BagItemPostRequestPayload extends DeepPartial<BagItem> {}

export interface LoginCredentials {
	email: string
	password: string
}

export interface CreateUserPayload extends Partial<User> {
	password: string
}

type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>
}
