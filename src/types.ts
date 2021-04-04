import { Request, RequestHandler } from 'express'
import { DeepPartial } from 'typeorm'
import { Bag } from './entities/Bag'
import { Image } from './entities/Image'
import { User } from './entities/User'

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
