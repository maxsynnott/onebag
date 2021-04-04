import {
	ButtonGroup,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Typography,
} from '@material-ui/core'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import { useQueryClient } from 'react-query'
import { BagItem, WithItem } from '../types'
import useCreateWishListItem from '../hooks/mutations/useCreateWishListItem'

interface BagItemListItemProps {
	bagItem: BagItem & WithItem
}

export default function BagItemCard({ bagItem }: BagItemListItemProps) {
	const queryClient = useQueryClient()

	const { mutate: createWishListItem } = useCreateWishListItem()

	const handleCreateWishListItem = () => {
		createWishListItem({ name: bagItem.item.name })
	}

	return (
		<Card style={{ width: '100%' }}>
			<Grid container>
				<Grid item xs={9}>
					<CardContent>
						<Typography variant="h6">
							{bagItem.item.name}
						</Typography>
						<Typography variant="body2">
							{bagItem.comment}
						</Typography>
					</CardContent>

					<CardActions>
						<ButtonGroup>
							<IconButton onClick={handleCreateWishListItem}>
								<PlaylistAddIcon color="primary" />
							</IconButton>
							<IconButton>
								<ShoppingCartIcon color="primary" />
							</IconButton>
						</ButtonGroup>
					</CardActions>
				</Grid>
				<Grid item xs={3}>
					<CardMedia
						image="https://source.unsplash.com/random"
						style={{ height: 150 }}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}
