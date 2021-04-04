import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import BagItemCard from '../components/BagItemCard'
import BagMainCard from '../components/BagMainCard'
import useBag from '../hooks/queries/useBag'
import { Bag, WithBagItems, WithImages } from '../types'

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(2),
	},
}))

export default function BagsShowPage() {
	const { id } = useParams<{ id: string }>()
	const classes = useStyles()

	const { data: bag } = useBag<Bag & WithImages & WithBagItems>(id, {
		queryParams: { relations: ['images', 'bagItems'] },
	})

	if (!bag) return <p>Future 404 page</p>

	return (
		<Grid
			container
			className={classes.container}
			spacing={2}
			justify="center"
		>
			<Grid item xs={12}>
				<BagMainCard bag={bag} />
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing={2}>
					{bag.bagItems.map((bagItem) => (
						<Grid item xs={12} md={6}>
							<BagItemCard bagItem={bagItem} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	)
}
