import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	makeStyles,
	Typography
} from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import React from 'react'

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
	bag: any
}

export default function BagCard({ bag }: BagCardProps) {
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
					{bag.title}
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
				<Button size="small" color="primary">
					View
				</Button>

				<IconButton>
					<FavoriteBorderIcon color="secondary" />
				</IconButton>
			</CardActions>
		</Card>
	)
}
