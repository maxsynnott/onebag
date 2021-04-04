import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import BagsGrid from '../components/BagsGrid'
import HeroContent from '../components/HeroContent'
import useBags from '../hooks/queries/useBags'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserBags from '../hooks/queries/useUserBags'
import { Bag, WithUser } from '../types'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
}))

export default function BagsIndexPage() {
	const classes = useStyles()

	const { data: bags, isLoading, error } = useBags({
		queryParams: { relations: ['user'] },
	})
	const { data: currentUser } = useCurrentUser({
		queryParams: { relations: ['bags'] },
	})

	if (isLoading) return <p>Loading...</p>
	if (error || !bags) return <p>Error...</p>

	const showHeroContent = currentUser?.bags?.length === 0

	return (
		<Container className={classes.cardGrid}>
			{showHeroContent && (
				<HeroContent
					title="Join the club"
					button={{ text: 'Add your onebag', to: '/bags/new' }}
				/>
			)}

			<Box mt={1}>
				<BagsGrid bags={bags as (Bag & WithUser)[]} />
			</Box>
		</Container>
	)
}
