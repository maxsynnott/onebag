import { Router } from 'express'
import { RoutesObject } from '../types'

export default function applyRoutes(router: Router, routes: RoutesObject) {
	Object.entries(routes).forEach(([path, routeDefinitions]) => {
		routeDefinitions.forEach(({ method, handlers }) => {
			router[method](path, ...handlers)
		})
	})
}
