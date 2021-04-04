import { useQuery } from 'react-query'
import { getBagImages } from '../../api/images'
import { ExtendedUseQueryOptions, Image } from '../../types'

export default function useBagImages<ReturnType = Image[]>(
	bagId: string,
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['bags', bagId, 'images']

	return useQuery<ReturnType>(
		queryKey,
		() => getBagImages(bagId, options?.queryParams),
		options,
	)
}
