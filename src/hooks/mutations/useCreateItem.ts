import { useMutation, UseMutationOptions } from 'react-query'
import { postItem } from '../../api/items'
import { Item } from '../../types'

export default function useCreateItem(
	options?: UseMutationOptions<Item, unknown, Partial<Item>>,
) {
	return useMutation((input: Partial<Item>) => postItem(input), options)
}
