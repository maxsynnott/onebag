import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import BagGrid from '../components/BagGrid'
import HeroContent from '../components/HeroContent'
import useBags from '../hooks/queries/useBags'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserBags from '../hooks/queries/useUserBags'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(8),
	},
}))

export default function BagsIndexPage() {
	const classes = useStyles()

	const { data: bags, isLoading, error } = useBags()
	const { data: currentUser } = useCurrentUser()
	const { data: userBags } = useUserBags(currentUser?.id)

	if (isLoading) return <p>Loading...</p>
	if (error || !bags) return <p>Error...</p>

	const showHeroContent = !currentUser || userBags?.length === 0

	return (
		<Container className={classes.cardGrid}>
			{showHeroContent && (
				<HeroContent
					title="Join the club"
					button={{ text: 'Add your onebag', to: '/bags/new' }}
				/>
			)}

			<Box mt={1}>
				<BagGrid bags={bags} />
			</Box>
		</Container>
	)
}
