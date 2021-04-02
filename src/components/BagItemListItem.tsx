import { Button } from '@material-ui/core'
import React from 'react'
import { useQueryClient } from 'react-query'
import useDeleteBagItem from '../hooks/mutations/useDeleteBagItem'
import { BagItem } from '../types'

interface BagItemListItemProps {
	bagId: string
	bagItem: BagItem
}

export default function BagItemListItem({
	bagId,
	bagItem,
}: BagItemListItemProps) {
	const queryClient = useQueryClient()

	const { mutate: deleteBagItem } = useDeleteBagItem(bagId, bagItem.id)

	const handleDeleteBagItem = () => {
		deleteBagItem(undefined, {
			onSuccess: () => {
				queryClient.invalidateQueries(['bags', bagId, 'bagItems'])
			},
		})
	}

	return (
		<li key={bagItem.id}>
			<p>{JSON.stringify(bagItem)}</p>
			<Button onClick={handleDeleteBagItem}>Delete</Button>
		</li>
	)
}
