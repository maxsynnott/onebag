import { useMutation, UseMutationOptions } from 'react-query'
import { CreateUserPayload, LoginCredentials, User } from '../../types'
import { postUser } from '../../api/users'

export default function useCreateUser(
	options?: UseMutationOptions<User, unknown, CreateUserPayload>,
) {
	return useMutation(
		(newUser: CreateUserPayload) => postUser(newUser),
		options,
	)
}
