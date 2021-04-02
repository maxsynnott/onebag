import axios from 'axios'
import { BagItem, BagItemPostRequestPayload } from '../types'

export const getBagItems = async (bagId: string) => {
	const endpoint = `/bags/${bagId}/bagItems`
	const { data } = await axios.get<BagItem[]>(endpoint)
	return data
}

export const postBagItem = async (
	bagId: string,
	newBagItem: Partial<BagItemPostRequestPayload>,
) => {
	const endpoint = `/bags/${bagId}/bagItems`
	const body = newBagItem
	const { data } = await axios.post<BagItem>(endpoint, body, {
		withCredentials: true,
	})
	return data
}

export const deleteBagItem = async (bagId: string, id: string) => {
	const endpoint = `/bags/${bagId}/bagItems/${id}`
	const { data } = await axios.delete(endpoint, { withCredentials: true })
	return data
}
