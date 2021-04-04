import { useMutation, UseMutationOptions } from 'react-query'
import { postFavoriteBag } from '../../api/bags'
import { Bag } from '../../types'

export default function useFavoriteBag(
	id: string,
	options?: UseMutationOptions<Bag>,
) {
	return useMutation(() => postFavoriteBag(id), options)
}
