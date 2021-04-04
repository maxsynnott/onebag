import { useMutation, UseMutationOptions } from 'react-query'
import { postSession } from '../../api/sessions'
import { LoginCredentials, User } from '../../types'

export default function useCreateSession(
	options?: UseMutationOptions<User, unknown, LoginCredentials>,
) {
	return useMutation(
		(loginCredentials: LoginCredentials) => postSession(loginCredentials),
		options,
	)
}
