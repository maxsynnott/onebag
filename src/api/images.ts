import axios from 'axios'
import { Image, QueryParamsObject } from '../types'
import { buildEndpoint } from './helpers'

export const getBagImages = async (
	bagId: string,
	queryParams?: QueryParamsObject,
) => {
	const endpoint = buildEndpoint(
		'/bags/:bagId/images',
		{ bagId },
		queryParams,
	)

	const { data } = await axios.get(endpoint)
	return data
}

export const postBagImage = async (bagId: string, image: File) => {
	const endpoint = buildEndpoint('/bags/:bagId/images', { bagId })
	const formData = new FormData()
	formData.append('image', image)

	const { data } = await axios.post<Image>(endpoint, formData)
	return data
}

export const getItemImages = async (
	itemId: string,
	queryParams?: QueryParamsObject,
) => {
	const endpoint = buildEndpoint(
		'/items/:itemId/images',
		{ itemId },
		queryParams,
	)

	const { data } = await axios.get(endpoint)
	return data
}

export const postItemImage = async (itemId: string, image: File) => {
	const endpoint = buildEndpoint('/items/:itemId/images', { itemId })
	const formData = new FormData()
	formData.append('image', image)

	const { data } = await axios.post<Image>(endpoint, formData)
	return data
}
