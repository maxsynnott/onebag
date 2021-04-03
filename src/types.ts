import { Request, RequestHandler } from 'express'
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

export interface ImageResponse {
	id: string
	url: string
}

export interface BagResponse extends BagResponseExtraAttributes {
	id: string
	name: string
	description: string
}

interface BagResponseExtraAttributes extends BagFavoriteAttributes {}

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
