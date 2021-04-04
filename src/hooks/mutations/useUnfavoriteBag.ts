import { useMutation, UseMutationOptions } from 'react-query'
import { deleteFavoriteBag } from '../../api/bags'
import { Bag } from '../../types'

export default function useUnfavoriteBag(
	id: string,
	options?: UseMutationOptions<Bag>,
) {
	return useMutation(() => deleteFavoriteBag(id), options)
}
