import { useMutation, UseMutationOptions } from 'react-query'
import { postItemImage } from '../../api/images'
import { Image } from '../../types'

export default function useCreateItemImage(
	itemId: string,
	options?: UseMutationOptions<Image, unknown, File>,
) {
	return useMutation((image: File) => postItemImage(itemId, image), options)
}
