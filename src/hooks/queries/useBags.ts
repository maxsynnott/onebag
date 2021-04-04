import { useQuery, UseQueryOptions } from 'react-query'
import { getBags } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useBags(options?: ExtendedUseQueryOptions<Bag[]>) {
	const queryKey = 'bags'

	return useQuery(queryKey, () => getBags(options?.queryParams), options)
}
