import { UseQueryOptions } from 'react-query'

export interface Bag extends Partial<BagRelations> {
	id: string
	name: string
	description: string
	favoriteCount: number
	favorited?: boolean
}

export interface BagRelations {
	images: Image[]
	user: User
}

export interface User extends Partial<UserRelations> {
	id: string
	username: string
	email: string
	avatarUrl: string
}

interface UserRelations {
	bags: Bag[]
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

export interface WithUser {
	user: User
}

export interface WithBags {
	bags: Bag[]
}

export interface WithImages {
	images: Image[]
}

export interface WithBagItems<T = BagItem> {
	bagItems: T[]
}

export interface WithWishListItems {
	wishListItems: WishListItem[]
}

export interface WithItem {
	item: Item
}

export interface WithItems<T = Item> {
	items: T[]
}

export interface WithFavoriteBags {
	favoriteBags: Bag[]
}

export interface ExtendedUseQueryOptions<T = unknown, U = unknown, V = T>
	extends UseQueryOptions<T, U, V> {
	queryParams?: QueryParamsObject
}

export interface QueryParamsObject {
	relations?: string[]
}

export interface WishListItem {
	id: string
	name: string
	affiliateLink: string
}
