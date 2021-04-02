import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import React, { FormEvent, useState } from 'react'
import { useQueryClient } from 'react-query'
import BagItemListItem from '../components/BagItemListItem'
import useCreateBagItem from '../hooks/mutations/useCreateBagItem'
import useBagItems from '../hooks/queries/useBagItems'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserItems from '../hooks/queries/useUserItems'
import { Bag } from '../types'

interface BagEditableShowProps {
	bag: Bag
}

export default function BagEditableShow({ bag }: BagEditableShowProps) {
	const queryClient = useQueryClient()

	const [itemId, setItemId] = useState('')
	const [comment, setComment] = useState('')
	const [quantity, setQuantity] = useState(1)

	const { data: currentUser } = useCurrentUser()
	const { data: items } = useUserItems(currentUser?.id)
	const { data: bagItems } = useBagItems(bag.id)

	const { mutate: createBagItem } = useCreateBagItem(bag.id, {
		onSuccess: () => {
			queryClient.invalidateQueries(['bags', bag.id, 'bagItems'])
		},
	})

	const handleCreateBagItem = (e: FormEvent) => {
		e.preventDefault()

		createBagItem({ comment, quantity, item: { id: itemId } })
	}

	return (
		<div>
			<p>Editable: {JSON.stringify(bag)}</p>
			<ul>
				{bagItems?.map((bagItem) => (
					<BagItemListItem bagId={bag.id} bagItem={bagItem} />
				))}
			</ul>
			Add new bag item
			<form onSubmit={handleCreateBagItem}>
				<Select
					value={itemId}
					onChange={(e) => setItemId(e.target.value as string)}
				>
					{items?.map((item) => (
						<MenuItem value={item.id} key={item.id}>
							{item.name}
						</MenuItem>
					))}
				</Select>

				<TextField
					label="Comment"
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>

				<TextField
					label="Quantity"
					value={quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}
					type="number"
				/>

				<Button type="submit">Submit</Button>
			</form>
		</div>
	)
}
