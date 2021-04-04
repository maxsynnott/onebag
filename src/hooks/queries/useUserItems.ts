import { useQuery } from 'react-query'
import { getUserItems } from '../../api/items'
import { ExtendedUseQueryOptions, Item } from '../../types'

export default function useUserItems<ReturnType = Item[]>(
	userId: string,
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['users', userId, 'items']

	return useQuery<ReturnType>(
		queryKey,
		() => getUserItems(userId, options?.queryParams),
		options,
	)
}
