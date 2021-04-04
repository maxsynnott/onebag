import { useQuery } from 'react-query'
import { getBag } from '../../api/bags'
import { Bag, ExtendedUseQueryOptions } from '../../types'

export default function useBag<ReturnType = Bag>(
	id: string,
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['bags', id]

	return useQuery<ReturnType>(
		queryKey,
		() => getBag(id, options?.queryParams),
		options,
	)
}
