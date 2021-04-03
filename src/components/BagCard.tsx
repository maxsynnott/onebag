import {
	Box,
	Button,
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
import useFavoriteBag from '../hooks/mutations/useFavoriteBag'
import useUnfavoriteBag from '../hooks/mutations/useUnfavoriteBag'
import { Bag } from '../types'
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
	bag: Bag
}

export default function BagCard({ bag }: BagCardProps) {
	const queryClient = useQueryClient()
	const classes = useStyles()

	const { mutate: favoriteBag } = useFavoriteBag(bag.id, {
		onSuccess: () => {
			queryClient.invalidateQueries('bags')
		},
	})
	const { mutate: unfavoriteBag } = useUnfavoriteBag(bag.id, {
		onSuccess: () => {
			queryClient.invalidateQueries('bags')
		},
	})

	const handleFavoriteBag = () => favoriteBag()
	const handleUnfavoriteBag = () => unfavoriteBag()

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
				<Button
					component={RouterLink}
					to={`/bags/${bag.id}`}
					size="small"
					color="primary"
				>
					View
				</Button>
				<Box>
					{typeof bag.favorited === 'boolean' && (
						<BagFavoriteButton bag={bag} />
					)}
				</Box>
			</CardActions>
		</Card>
	)
}
