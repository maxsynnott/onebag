import React from 'react'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { User, WithWishListItems } from '../types'
import { List, ListItem, Typography } from '@material-ui/core'

export default function MyWishListPage() {
	const { data: currentUser } = useCurrentUser<User & WithWishListItems>({
		queryParams: { relations: ['wishListItems'] },
	})

	if (!currentUser) return null

	return (
		<List>
			{currentUser.wishListItems.map((wishListItem) => (
				<ListItem>
					<pre>{JSON.stringify(wishListItem, null, 4)}</pre>
				</ListItem>
			))}
		</List>
	)
}
