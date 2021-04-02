import axios from 'axios'
import { Bag } from '../types'

export const getBags = async () => {
	const endpoint = '/bags'
	const { data } = await axios.get<Bag[]>(endpoint)
	return data
}

export const getBag = async (id: string) => {
	const endpoint = `/bags/${id}`
	const { data } = await axios.get<Bag>(endpoint)
	return data
}

export const postBag = async (newBag: Partial<Bag>) => {
	const endpoint = '/bags'
	const body = newBag
	const { data } = await axios.post<Bag>(endpoint, body, {
		withCredentials: true,
	})
	return data
}

export const patchBag = async (id: string, attributes: Partial<Bag>) => {
	const endpoint = `/bags/${id}`
	const body = attributes
	const { data } = await axios.patch<Bag>(endpoint, body, {
		withCredentials: true,
	})
	return data
}
