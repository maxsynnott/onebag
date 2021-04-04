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
import { BagItem } from '../types'

interface BagItemListItemProps {
	bagId: string
	bagItem: BagItem
}

export default function BagItemCard({ bagId, bagItem }: BagItemListItemProps) {
	const queryClient = useQueryClient()

	return (
		<Card style={{ width: '100%' }}>
			<Grid container>
				<Grid item xs={9}>
					<CardContent>
						<Typography variant="h6">
							{bagItem.item?.name}
						</Typography>
						<Typography variant="body2">
							{bagItem.comment}
						</Typography>
					</CardContent>

					<CardActions>
						<ButtonGroup>
							<IconButton>
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
