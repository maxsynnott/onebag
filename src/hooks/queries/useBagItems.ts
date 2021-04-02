import { useQuery, UseQueryOptions } from 'react-query'
import { getBagItems } from '../../api/bagItems'
import { BagItem } from '../../types'

export default function useBagItems(
	bagId: string,
	options?: UseQueryOptions<BagItem[]>,
) {
	const queryKey = ['bags', bagId, 'bagItems']

	return useQuery(queryKey, () => getBagItems(bagId), options)
}
