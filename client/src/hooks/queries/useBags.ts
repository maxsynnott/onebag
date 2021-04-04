import { useQuery } from 'react-query'
import { getBags } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useBags<ReturnType = Bag[]>(
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = 'bags'

	return useQuery<ReturnType>(
		queryKey,
		() => getBags(options?.queryParams),
		options,
	)
}
