import { Request, RequestHandler } from 'express'
import { User } from './entities/User'

export interface RequestWithUser extends Request {
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
