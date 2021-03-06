import { Button, Input, ListItem } from '@material-ui/core'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useQueryClient } from 'react-query'
import useCreateItemImage from '../hooks/mutations/useCreateItemImage'
import { Item, WithImages } from '../types'

interface ItemListItemProps {
	item: Item & WithImages
}

export default function ItemListItem({ item }: ItemListItemProps) {
	const queryClient = useQueryClient()
	const [image, setImage] = useState<File>()

	const { mutate: createItemImage } = useCreateItemImage(item.id, {
		onSuccess: () => {
			queryClient.invalidateQueries(['items', item.id, 'images'])
		},
	})

	const handleCreateItemImage = (e: FormEvent) => {
		e.preventDefault()

		if (image) createItemImage(image)
	}

	return (
		<ListItem>
			<p>{JSON.stringify(item)}</p>
			<form onSubmit={handleCreateItemImage}>
				<Input
					type="file"
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setImage(e.target.files?.[0])
					}
				/>

				<Button type="submit">Submit</Button>
			</form>
			{item.images.map((image) => (
				<img src={image.url} />
			))}
		</ListItem>
	)
}
