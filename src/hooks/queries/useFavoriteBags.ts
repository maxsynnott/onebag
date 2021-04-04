import { useQuery, UseQueryOptions } from 'react-query'
import { getFavoriteBags } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useUserBags(options?: ExtendedUseQueryOptions<Bag[]>) {
	const queryKey = ['bags', 'favorites']

	return useQuery(
		queryKey,
		() => getFavoriteBags(options?.queryParams),
		options,
	)
}
