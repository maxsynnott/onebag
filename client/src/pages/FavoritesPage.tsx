import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import BagsGrid from '../components/BagsGrid'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { User, WithFavoriteBags } from '../types'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
}))

export default function FavoritesPage() {
	const classes = useStyles()

	const { data: currentUser } = useCurrentUser<User & WithFavoriteBags>({
		queryParams: {
			relations: ['favoriteBags'],
		},
	})

	if (!currentUser) return <p>404</p>

	const favoriteBags = currentUser.favoriteBags.map((favoriteBag) => ({
		...favoriteBag,
		user: currentUser,
	}))

	return (
		<Container className={classes.cardGrid}>
			<Box mt={1}>
				<BagsGrid bags={favoriteBags} />
			</Box>
		</Container>
	)
}
