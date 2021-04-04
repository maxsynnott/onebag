import { useQuery } from 'react-query'
import { getUserBags } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useUserBags<ReturnType = Bag[]>(
	userId: string,
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['users', userId, 'bags']

	return useQuery<ReturnType>(
		queryKey,
		() => getUserBags(userId, options?.queryParams),
		options,
	)
}
