import { List } from '@material-ui/core'
import React from 'react'
import { Item } from '../types'
import ItemListItem from './ItemListItem'

interface ItemsListProps {
	items: Item[]
}

export default function ItemsList({ items }: ItemsListProps) {
	return (
		<List>
			{items.map((item: Item) => (
				<ItemListItem item={item} />
			))}
		</List>
	)
}
