import axios from 'axios'
import { Item } from '../types'
import { buildEndpoint } from './helpers'

export const postItem = async (item: Partial<Item>) => {
	const endpoint = buildEndpoint('/items')
	const body = item

	const { data } = await axios.post<Item>(endpoint, body, {
		withCredentials: true,
	})
	return data
}
