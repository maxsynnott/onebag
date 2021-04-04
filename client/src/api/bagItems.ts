import axios from 'axios'
import { BagItem, BagItemPostRequestPayload, QueryParamsObject } from '../types'
import { buildEndpoint } from './helpers'

export const postBagItem = async (
	bagId: string,
	newBagItem: Partial<BagItemPostRequestPayload>,
) => {
	const endpoint = buildEndpoint('/bags/:bagId/bagItems', { bagId })
	const body = newBagItem

	const { data } = await axios.post<BagItem>(endpoint, body, {
		withCredentials: true,
	})
	return data
}

export const deleteBagItem = async (bagId: string, id: string) => {
	const endpoint = buildEndpoint('/bags/:bagId/bagItems/:id', { bagId, id })

	const { data } = await axios.delete(endpoint, { withCredentials: true })
	return data
}
