import { useMutation, UseMutationOptions } from 'react-query'
import { postBagItem } from '../../api/bagItems'
import { BagItem, BagItemPostRequestPayload } from '../../types'

export default function useCreateBagItem(
	bagId: string,
	options?: UseMutationOptions<
		BagItem,
		unknown,
		Partial<BagItemPostRequestPayload>
	>,
) {
	return useMutation(
		(newBag: Partial<BagItemPostRequestPayload>) =>
			postBagItem(bagId, newBag),
		options,
	)
}
