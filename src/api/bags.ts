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
