import { useQuery, UseQueryOptions } from 'react-query'
import { getCurrentUser } from '../../api/users'
import { User } from '../../types'

export default function useCurrentUser(options?: UseQueryOptions<User>) {
	const queryKey = ['users', 'current']

	return useQuery(queryKey, () => getCurrentUser(), options)
}
