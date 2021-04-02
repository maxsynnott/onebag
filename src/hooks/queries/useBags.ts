import { useQuery, UseQueryOptions } from 'react-query'
import { getBags } from '../../api/bags'
import { Bag } from '../../types'

export default function useBags(options?: UseQueryOptions<Bag[]>) {
	const queryKey = 'bags'

	return useQuery(queryKey, () => getBags(), options)
}
