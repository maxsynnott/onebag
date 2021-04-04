import { useQuery, UseQueryOptions } from 'react-query'
import { getFavoriteBags, getUserBags } from '../../api/bags'
import { Bag } from '../../types'

export default function useUserBags(options?: UseQueryOptions<Bag[]>) {
	const queryKey = ['bags', 'favorites']

	return useQuery(queryKey, () => getFavoriteBags(), options)
}
