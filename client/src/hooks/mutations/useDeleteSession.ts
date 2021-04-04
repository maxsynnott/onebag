import { useMutation, UseMutationOptions } from 'react-query'
import { deleteSession } from '../../api/sessions'

export default function useDeleteSession(options?: UseMutationOptions) {
	return useMutation(() => deleteSession(), options)
}
