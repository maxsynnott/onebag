import { useQuery, UseQueryOptions } from 'react-query'
import { getBag } from '../../api/bags'
import { Bag } from '../../types'

export default function useBag(id: string, options?: UseQueryOptions<Bag>) {
	const queryKey = ['bags', id]

	return useQuery(queryKey, () => getBag(id), options)
}
