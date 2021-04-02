import axios from 'axios'
import { LoginCredentials, User } from '../types'

export const postSession = async (loginCredentials: LoginCredentials) => {
	const endpoint = '/sessions'
	const body = loginCredentials
	const { data } = await axios.post<User>(endpoint, body)
	return data
}

export const deleteSession = async () => {
	const endpoint = '/sessions'
	const { data } = await axios.delete(endpoint, {
		withCredentials: true,
	})
	return data
}
