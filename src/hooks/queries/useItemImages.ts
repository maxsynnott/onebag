import { useQuery } from 'react-query'
import { getItemImages } from '../../api/images'
import { ExtendedUseQueryOptions, Image } from '../../types'

export default function useItemImages<ReturnType = Image[]>(
	itemId: string,
	options?: ExtendedUseQueryOptions<ReturnType>,
) {
	const queryKey = ['items', itemId, 'images']

	return useQuery<ReturnType>(
		queryKey,
		() => getItemImages(itemId, options?.queryParams),
		options,
	)
}
