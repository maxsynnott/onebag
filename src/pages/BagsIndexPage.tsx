import {
	Box,
	Button,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core'
import React from 'react'
import BagGrid from '../components/BagGrid'
import useBags from '../hooks/queries/useBags'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(12, 0, 12),
		'background-image': "url('https://source.unsplash.com/random')",
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
}))

export default function BagsIndexPage() {
	const classes = useStyles()

	const { data: bags, isLoading, error } = useBags()

	if (isLoading) return <p>Loading...</p>
	if (error || !bags) return <p>Error...</p>

	return (
		<Container className={classes.cardGrid}>
			<div className={classes.heroContent}>
				<Container maxWidth="sm">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						gutterBottom
					>
						Join the club
					</Typography>
					<div className={classes.heroButtons}>
						<Grid container spacing={2} justify="center">
							<Grid item>
								<Button
									component={RouterLink}
									variant="contained"
									to="/bags/new"
									color="primary"
								>
									Add your onebag
								</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>

			<Box mt={1}>
				<BagGrid bags={bags} />
			</Box>
		</Container>
	)
}
