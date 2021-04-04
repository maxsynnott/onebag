import axios from 'axios'
import { Item, QueryParamsObject } from '../types'
import { buildEndpoint } from './helpers'

export const getUserItems = async (
	userId: string,
	queryParams?: QueryParamsObject,
) => {
	const endpoint = buildEndpoint(
		'/users/:userId/items',
		{ userId },
		queryParams,
	)

	const { data } = await axios.get(endpoint)
	return data
}

export const postItem = async (item: Partial<Item>) => {
	const endpoint = `/items`
	const body = item
	const { data } = await axios.post<Item>(endpoint, body, {
		withCredentials: true,
	})
	return data
}
