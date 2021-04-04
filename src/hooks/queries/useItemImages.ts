import { useQuery } from 'react-query'
import { getItemImages } from '../../api/images'
import { ExtendedUseQueryOptions, Image } from '../../types'

export default function useItemImages(
	itemId: string,
	options?: ExtendedUseQueryOptions<Image[]>,
) {
	const queryKey = ['items', itemId, 'images']

	return useQuery(
		queryKey,
		() => getItemImages(itemId, options?.queryParams),
		options,
	)
}
