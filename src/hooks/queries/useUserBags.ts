import { useQuery, UseQueryOptions } from 'react-query'
import { getUserBags } from '../../api/bags'
import { Bag } from '../../types'

export default function useUserBags(
	userId?: string,
	options?: UseQueryOptions<Bag[]>,
) {
	const queryKey = ['users', userId, 'bags']

	return useQuery(queryKey, () => getUserBags(userId), options)
}
