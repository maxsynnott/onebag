import { useQuery } from 'react-query'
import { getCurrentUser } from '../../api/users'
import { ExtendedUseQueryOptions, User } from '../../types'

export default function useCurrentUser(
	options?: ExtendedUseQueryOptions<User>,
) {
	const queryKey = ['users', 'current']

	return useQuery(
		queryKey,
		() => getCurrentUser(options?.queryParams),
		options,
	)
}
