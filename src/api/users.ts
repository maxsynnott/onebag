import axios from 'axios'
import { CreateUserPayload, User } from '../types'

export const getCurrentUser = async () => {
	const endpoint = '/users/current'
	const { data } = await axios.get<User>(endpoint, {
		withCredentials: true,
	})
	return data
}

export const postUser = async (newUser: CreateUserPayload) => {
	const endpoint = '/users'
	const body = newUser
	const { data } = await axios.post<User>(endpoint, body)
	return data
}
