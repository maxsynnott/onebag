import { useQuery } from 'react-query'
import { getBagItems } from '../../api/bagItems'
import { BagItem, ExtendedUseQueryOptions } from '../../types'

export default function useBagItems<ReturnType = BagItem[]>(
	bagId: string,
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['bags', bagId, 'bagItems']

	return useQuery<ReturnType>(
		queryKey,
		() => getBagItems(bagId, options?.queryParams),
		options,
	)
}
