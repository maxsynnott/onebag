import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import { useQuery } from 'react-query'
import NewBagInput from '../components/NewBagInput'
import BagCard from '../components/BagCard'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
}))

export default function BagsIndexPage() {
	const classes = useStyles()

	const url = 'http://localhost:8080/bags'

	const { isLoading, error, data: bags } = useQuery('bags', async () => {
		const response = await axios.get(url)
		return response.data
	})

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error...</p>

	return (
		<Container className={classes.cardGrid}>
			<NewBagInput />

			<Box mt={1}>
				<Grid container spacing={4}>
					{bags.map((bag: any) => (
						<Grid item key={bag.id} xs={12} sm={6} md={3}>
							<BagCard bag={bag} />
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	)
}
