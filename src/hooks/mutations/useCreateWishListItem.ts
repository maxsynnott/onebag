import { useMutation, UseMutationOptions } from 'react-query'
import { postWishListItem } from '../../api/wishListItems'
import { WishListItem } from '../../types'

export default function useCreateWishListItem(
	options?: UseMutationOptions<WishListItem, unknown, Partial<WishListItem>>,
) {
	return useMutation(
		(newWishListItem: Partial<WishListItem>) =>
			postWishListItem(newWishListItem),
		options,
	)
}
