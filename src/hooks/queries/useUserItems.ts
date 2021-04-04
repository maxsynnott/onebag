import { useQuery } from 'react-query'
import { getUserItems } from '../../api/items'
import { ExtendedUseQueryOptions, Item } from '../../types'

export default function useUserItems(
	userId: string,
	options?: ExtendedUseQueryOptions<Item[]>,
) {
	const queryKey = ['users', userId, 'items']

	return useQuery(
		queryKey,
		() => getUserItems(userId, options?.queryParams),
		options,
	)
}
