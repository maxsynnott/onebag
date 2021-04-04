import { useQuery } from 'react-query'
import { getCurrentUser } from '../../api/users'
import { ExtendedUseQueryOptions, User } from '../../types'

export default function useCurrentUser<ReturnType = User>(
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['users', 'current']

	return useQuery<ReturnType>(
		queryKey,
		() => getCurrentUser(options?.queryParams),
		options,
	)
}
