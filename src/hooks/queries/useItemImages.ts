import { useQuery, UseQueryOptions } from 'react-query'
import { getItemImages } from '../../api/images'
import { Image } from '../../types'

export default function useItemImages(
	itemId: string,
	options?: UseQueryOptions<Image[]>,
) {
	const queryKey = ['items', itemId, 'images']

	return useQuery(queryKey, () => getItemImages(itemId), options)
}
