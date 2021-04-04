import { useQuery, UseQueryOptions } from 'react-query'
import { getFavoriteBags } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useUserBags<ReturnType = Bag[]>(
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['bags', 'favorites']

	return useQuery<ReturnType>(
		queryKey,
		() => getFavoriteBags(options?.queryParams),
		options,
	)
}
