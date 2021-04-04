import { useMutation, UseMutationOptions } from 'react-query'
import { postBagImage } from '../../api/images'
import { Image } from '../../types'

export default function useCreateBagImage(
	bagId: string,
	options?: UseMutationOptions<Image, unknown, File>,
) {
	return useMutation((image: File) => postBagImage(bagId, image), options)
}
