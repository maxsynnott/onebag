import axios from 'axios'
import { Item } from '../types'

export const getUserItems = async (userId?: string) => {
	const endpoint = `/users/${userId}/items`
	const { data } = await axios.get<Item[]>(endpoint)
	return data
}
