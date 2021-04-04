import axios from 'axios'
import { CreateUserPayload, QueryParamsObject, User } from '../types'
import { buildEndpoint } from './helpers'

export const getCurrentUser = async (queryParams?: QueryParamsObject) => {
	const endpoint = buildEndpoint('/users/current', undefined, queryParams)
	const { data } = await axios.get(endpoint, {
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
