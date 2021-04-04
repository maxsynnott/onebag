import { useQuery } from 'react-query'
import { getBagItems } from '../../api/bagItems'
import { BagItem, ExtendedUseQueryOptions } from '../../types'

export default function useBagItems(
	bagId: string,
	options?: ExtendedUseQueryOptions<BagItem[]>,
) {
	const queryKey = ['bags', bagId, 'bagItems']

	return useQuery(
		queryKey,
		() => getBagItems(bagId, options?.queryParams),
		options,
	)
}
