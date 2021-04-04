import { List } from '@material-ui/core'
import React from 'react'
import { Item, WithImages } from '../types'
import ItemListItem from './ItemListItem'

interface ItemsListProps {
	items: (Item & WithImages)[]
}

export default function ItemsList({ items }: ItemsListProps) {
	return (
		<List>
			{items.map((item) => (
				<ItemListItem item={item} />
			))}
		</List>
	)
}
