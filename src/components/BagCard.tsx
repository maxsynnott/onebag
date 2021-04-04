import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	makeStyles,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { useQueryClient } from 'react-query'
import { Link as RouterLink } from 'react-router-dom'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { Bag, BagRelations, User, WithUser } from '../types'
import BagFavoriteButton from './BagFavoriteButton'

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
		paddingBottom: 0,
	},
	cardActions: {
		justifyContent: 'space-between',
	},
}))

interface BagCardProps {
	bag: Bag & WithUser
}

export default function BagCard({ bag }: BagCardProps) {
	const { data: currentUser } = useCurrentUser()
	const currentUserIsOwner = currentUser?.id === bag.user.id

	const queryClient = useQueryClient()
	const classes = useStyles()

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.cardMedia}
				image="https://source.unsplash.com/random"
				title="Image title"
			/>
			<CardContent className={classes.cardContent}>
				<Typography gutterBottom variant="h5" component="h2">
					{bag.name}
				</Typography>
				<Typography>
					{bag.description ||
						'This is a placeholder description to be filled by user'}
				</Typography>
				<Box mt={2}>
					<Typography variant="caption">12 items</Typography>
				</Box>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<ButtonGroup>
					<Button
						component={RouterLink}
						to={`/bags/${bag.id}`}
						size="small"
						color="primary"
					>
						View
					</Button>
					{currentUserIsOwner && (
						<Button
							component={RouterLink}
							to={`/bags/${bag.id}/edit`}
							size="small"
							color="primary"
						>
							Edit
						</Button>
					)}
				</ButtonGroup>

				<Box>
					{typeof bag.favorited === 'boolean' && (
						<BagFavoriteButton bag={bag} showFavoriteCount={true} />
					)}
				</Box>
			</CardActions>
		</Card>
	)
}
