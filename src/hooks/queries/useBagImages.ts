import { useQuery } from 'react-query'
import { getBagImages } from '../../api/images'
import { ExtendedUseQueryOptions, Image } from '../../types'

export default function useBagImages(
	bagId: string,
	options?: ExtendedUseQueryOptions<Image[]>,
) {
	const queryKey = ['bags', bagId, 'images']

	return useQuery(
		queryKey,
		() => getBagImages(bagId, options?.queryParams),
		options,
	)
}
