import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import BagsGrid from '../components/BagsGrid'
import useFavoriteBags from '../hooks/queries/useFavoriteBags'
import { Bag, WithUser } from '../types'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
}))

export default function FavoritesPage() {
	const classes = useStyles()

	const { data: bags } = useFavoriteBags<(Bag & WithUser)[]>({
		queryParams: { relations: ['user'] },
	})
	if (!bags) return <p>404</p>

	return (
		<Container className={classes.cardGrid}>
			<Box mt={1}>
				<BagsGrid bags={bags} />
			</Box>
		</Container>
	)
}
