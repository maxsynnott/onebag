import { useMutation, UseMutationOptions } from 'react-query'
import { patchBag } from '../../api/bags'
import { Bag } from '../../types'

export default function useUpdateBag(
	id: string,
	options?: UseMutationOptions<Bag, unknown, Partial<Bag>>,
) {
	return useMutation(
		(attributes: Partial<Bag>) => patchBag(id, attributes),
		options,
	)
}
