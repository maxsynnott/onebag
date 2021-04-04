import axios from 'axios'
import { LoginCredentials, User } from '../types'
import { buildEndpoint } from './helpers'

export const postSession = async (loginCredentials: LoginCredentials) => {
	const endpoint = buildEndpoint('/sessions')
	const body = loginCredentials

	const { data } = await axios.post<User>(endpoint, body)
	return data
}

export const deleteSession = async () => {
	const endpoint = buildEndpoint('/sessions')

	const { data } = await axios.delete(endpoint, {
		withCredentials: true,
	})
	return data
}
