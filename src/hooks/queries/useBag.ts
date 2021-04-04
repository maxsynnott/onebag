import { useQuery } from 'react-query'
import { getBag } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useBag(
	id: string,
	options?: ExtendedUseQueryOptions<Bag>,
) {
	const queryKey = ['bags', id]

	return useQuery(queryKey, () => getBag(id, options?.queryParams), options)
}
