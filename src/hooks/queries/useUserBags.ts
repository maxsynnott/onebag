import { useQuery } from 'react-query'
import { getUserBags } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useUserBags(
	userId: string,
	options?: ExtendedUseQueryOptions<Bag[]>,
) {
	const queryKey = ['users', userId, 'bags']

	return useQuery(
		queryKey,
		() => getUserBags(userId, options?.queryParams),
		options,
	)
}
