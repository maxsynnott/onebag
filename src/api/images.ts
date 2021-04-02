import axios from 'axios'
import { Image } from '../types'

export const getBagImages = async (bagId: string) => {
	const endpoint = `/bags/${bagId}/images`
	const { data } = await axios.get<Image[]>(endpoint)
	return data
}
