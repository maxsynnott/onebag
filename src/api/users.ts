import axios from 'axios'
import { User } from '../types'

export const getCurrentUser = async () => {
	const endpoint = '/users/current'
	const { data } = await axios.get<User>(endpoint, {
		withCredentials: true,
	})
	return data
}
