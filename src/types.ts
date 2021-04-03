export interface Bag {
	id: string
	name: string
	description: string
	favoriteCount: number
	favorited?: boolean
}

export interface User {
	id: string
	username: string
	email: string
}

export interface Item {
	id: string
	name: string
}

export interface BagItem {
	id: string
	comment: string
	quantity: number
}

export interface Image {
	id: string
	url: string
}

export interface BagItemPostRequestPayload extends BagItem {
	item: Partial<Item>
}

export interface LoginCredentials {
	email: string
	password: string
}

export interface CreateUserPayload extends Partial<User> {
	password: string
}
