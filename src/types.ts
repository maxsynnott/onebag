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

export interface BagResponse extends BagFavoriteAttributes {
	id: string
	name: string
	description: string
}

export interface BagFavoriteAttributes {
	favoriteCount: number
	favorited?: boolean
}
