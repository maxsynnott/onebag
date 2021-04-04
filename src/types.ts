import { Request, RequestHandler } from 'express'
import { DeepPartial } from 'typeorm'
import { Bag } from './entities/Bag'
import { BagItem } from './entities/BagItem'
import { Image } from './entities/Image'
import { Item } from './entities/Item'
import { Product } from './entities/Product'
import { User } from './entities/User'

export type EntityClass =
	| typeof Bag
	| typeof BagItem
	| typeof Image
	| typeof Item
	| typeof Product
	| typeof User

export type Class<T> = { new (): T }

export interface ExtendedRequest extends Request {
	user?: User
}

export interface RoutesObject {
	[key: string]: RouteDefinition[]
}

interface RouteDefinition {
	method: string
	handlers: RequestHandler[]
}

export interface ImageResponse
	extends DeepPartial<Image>,
		ImageResponseExtraAttributes {}

interface ImageResponseExtraAttributes {
	url: string
}

export interface BagResponse
	extends DeepPartial<Bag>,
		BagResponseExtraAttributes {}

export interface BagResponseExtraAttributes extends BagFavoriteAttributes {}

export interface BagFavoriteAttributes {
	favoriteCount: number
	favorited?: boolean
}

export interface UserResponse extends UserResponseExtraAttributes {
	id: string
	username: string
	email: string
}

interface UserResponseExtraAttributes {
	avatarUrl: string
}
