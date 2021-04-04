import {
	ButtonGroup,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	IconButton,
	makeStyles,
	Typography,
} from '@material-ui/core'
import ShareIcon from '@material-ui/icons/Share'
import React from 'react'
import BagFavoriteButton from '../components/BagFavoriteButton'
import { Bag } from '../types'

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		minHeight: 350,
	},
	container: {
		marginTop: theme.spacing(2),
	},
}))

interface BagMainCardProps {
	bag: Bag
}

export default function BagMainCard({ bag }: BagMainCardProps) {
	const classes = useStyles()
	const image = bag.images?.[0]

	return (
		<Card>
			<Grid container>
				<Grid item xs={6}>
					<CardHeader title={bag.name} />
					<CardContent>
						<Typography>
							{bag.description} Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Inventore doloremque
							laudantium ad nostrum dicta cumque repudiandae nobis
							obcaecati tempore, sequi enim! Maxime eius suscipit,
							quaerat reprehenderit pariatur veritatis laboriosam
							magnam?
						</Typography>
						<CardActionArea>
							<CardActions>
								<ButtonGroup>
									<BagFavoriteButton
										bag={bag}
										showFavoriteCount={
											bag.favoriteCount > 0
										}
									/>
									<IconButton>
										<ShareIcon />
									</IconButton>
								</ButtonGroup>
							</CardActions>
						</CardActionArea>
					</CardContent>
				</Grid>

				<Grid item xs={6}>
					<CardMedia
						image={image?.url}
						className={classes.cardMedia}
					/>
				</Grid>
			</Grid>
		</Card>
	)
}
