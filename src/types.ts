export interface Bag {
	id: string
	name: string
	description: string
}

export interface User {
	id: string
	username: string
	email: string
}

export interface Item {
	name: string
}

export interface LoginCredentials {
	email: string
	password: string
}

export interface CreateUserPayload extends Partial<User> {
	password: string
}
