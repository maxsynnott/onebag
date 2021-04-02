import { useMutation, UseMutationOptions } from 'react-query'
import { postUser } from '../../api/users'
import { CreateUserPayload, User } from '../../types'

export default function useCreateUser(
	options?: UseMutationOptions<User, unknown, CreateUserPayload>,
) {
	return useMutation(
		(newUser: CreateUserPayload) => postUser(newUser),
		options,
	)
}
