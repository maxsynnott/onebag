import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import React, { FormEvent, useState } from 'react'
import { useParams } from 'react-router'
import useCreateBagItem from '../hooks/mutations/useCreateBagItem'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { User, WithItems } from '../types'

export default function BagsEditPage() {
	const { id } = useParams<{ id: string }>()

	const [itemId, setItemId] = useState('')
	const [comment, setComment] = useState('')
	const [quantity, setQuantity] = useState(1)

	const { mutate: createBagItem } = useCreateBagItem(id)

	const { data: currentUser } = useCurrentUser<User & WithItems>({
		queryParams: { relations: ['items'] },
	})

	const handleCreateBagItem = (e: FormEvent) => {
		e.preventDefault()

		createBagItem({ comment, quantity, item: { id: itemId } })
	}

	return (
		<form onSubmit={handleCreateBagItem}>
			<Select
				value={itemId}
				onChange={(e) => setItemId(e.target.value as string)}
			>
				{currentUser?.items?.map((item) => (
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
	)
}
