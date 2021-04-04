import axios from 'axios'
import { CreateUserPayload, QueryParamsObject, User } from '../types'
import { buildEndpoint } from './helpers'

export const getCurrentUser = async (queryParams?: QueryParamsObject) => {
	console.log(queryParams)
	const endpoint = buildEndpoint('/users/current', undefined, queryParams)

	const { data } = await axios.get(endpoint, {
		withCredentials: true,
	})
	return data
}

export const postUser = async (newUser: CreateUserPayload) => {
	const endpoint = buildEndpoint('/users')
	const body = newUser

	const { data } = await axios.post<User>(endpoint, body)
	return data
}
