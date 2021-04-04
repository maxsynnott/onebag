import axios from 'axios'
import { WishListItem } from '../types'
import { buildEndpoint } from './helpers'

export const postWishListItem = async (wishListItem: Partial<WishListItem>) => {
	const endpoint = buildEndpoint('/wishListItems')
	const body = wishListItem

	const { data } = await axios.post<WishListItem>(endpoint, body, {
		withCredentials: true,
	})
	return data
}
