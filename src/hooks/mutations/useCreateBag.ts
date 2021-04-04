import { useMutation, UseMutationOptions } from 'react-query'
import { postBag } from '../../api/bags'
import { Bag } from '../../types'

export default function useCreateBag(
	options?: UseMutationOptions<Bag, unknown, Partial<Bag>>,
) {
	return useMutation((newBag: Partial<Bag>) => postBag(newBag), options)
}
