import { useMutation, UseMutationOptions } from 'react-query'
import { deleteBagItem } from '../../api/bagItems'

export default function useDeleteBagItem(
	bagId: string,
	id: string,
	options?: UseMutationOptions,
) {
	return useMutation(() => deleteBagItem(bagId, id), options)
}
