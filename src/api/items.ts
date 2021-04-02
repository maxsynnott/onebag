import axios from 'axios'
import { Item } from '../types'

export const getUserItems = async (userId?: string) => {
	const endpoint = `/users/${userId}/items`
	const { data } = await axios.get<Item[]>(endpoint)
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
