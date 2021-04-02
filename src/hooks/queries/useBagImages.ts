import { useQuery, UseQueryOptions } from 'react-query'
import { getBagImages } from '../../api/images'
import { Image } from '../../types'

export default function useBagImages(
	bagId: string,
	options?: UseQueryOptions<Image[]>,
) {
	const queryKey = ['bags', bagId, 'images']

	return useQuery(queryKey, () => getBagImages(bagId), options)
}
