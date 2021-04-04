import axios from 'axios'
import { Image } from '../types'

export const getBagImages = async (bagId?: string) => {
	const endpoint = `/bags/${bagId}/images`
	const { data } = await axios.get<Image[]>(endpoint)
	return data
}

export const postBagImage = async (bagId: string, image: File) => {
	const endpoint = `/bags/${bagId}/images`
	const formData = new FormData()
	formData.append('image', image)
	const { data } = await axios.post<Image>(endpoint, formData)
	return data
}

export const getItemImages = async (itemId: string) => {
	const endpoint = `/items/${itemId}/images`
	const { data } = await axios.get<Image[]>(endpoint)
	return data
}

export const postItemImage = async (itemId: string, image: File) => {
	const endpoint = `/items/${itemId}/images`
	const formData = new FormData()
	formData.append('image', image)
	const { data } = await axios.post<Image>(endpoint, formData)
	return data
}
