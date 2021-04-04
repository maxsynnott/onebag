import axios from 'axios'
import { Bag, QueryParamsObject } from '../types'
import { buildEndpoint } from './helpers'

export const getBags = async (queryParams?: QueryParamsObject) => {
	const endpoint = buildEndpoint('/bags', undefined, queryParams)

	const { data } = await axios.get(endpoint)
	return data
}

export const getBag = async (id: string, queryParams?: QueryParamsObject) => {
	const endpoint = buildEndpoint('/bags/:id', { id }, queryParams)

	const { data } = await axios.get(endpoint, { withCredentials: true })
	return data
}

export const postBag = async (newBag: Partial<Bag>) => {
	const endpoint = buildEndpoint('/bags')
	const body = newBag

	const { data } = await axios.post<Bag>(endpoint, body, {
		withCredentials: true,
	})
	return data
}

export const patchBag = async (id: string, attributes: Partial<Bag>) => {
	const endpoint = buildEndpoint('/bags/:id', { id })
	const body = attributes

	const { data } = await axios.patch<Bag>(endpoint, body, {
		withCredentials: true,
	})
	return data
}

export const postFavoriteBag = async (id: string) => {
	const endpoint = buildEndpoint('/bags/:id/favorite', { id })

	const { data } = await axios.post<Bag>(endpoint, null, {
		withCredentials: true,
	})
	return data
}

export const deleteFavoriteBag = async (id: string) => {
	const endpoint = buildEndpoint('/bags/:id/favorite', { id })

	const { data } = await axios.delete<Bag>(endpoint, {
		withCredentials: true,
	})
	return data
}

export const getUserBags = async (
	userId: string,
	queryParams?: QueryParamsObject,
) => {
	const endpoint = buildEndpoint(
		'/users/:userId/bags',
		{ userId },
		queryParams,
	)

	const { data } = await axios.get(endpoint)
	return data
}

export const getFavoriteBags = async (queryParams?: QueryParamsObject) => {
	const endpoint = buildEndpoint('/bags/favorites', undefined, queryParams)

	const { data } = await axios.get(endpoint, { withCredentials: true })
	return data
}
