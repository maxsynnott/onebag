import { useQuery, UseQueryOptions } from 'react-query'
import { getUserItems } from '../../api/items'
import { Item } from '../../types'

export default function useUserItems(
	userId?: string,
	options?: UseQueryOptions<Item[]>,
) {
	const queryKey = ['users', userId, 'items']

	return useQuery(queryKey, () => getUserItems(userId), options)
}
