import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import BagItemCard from '../components/BagItemCard'
import BagMainCard from '../components/BagMainCard'
import useBag from '../hooks/queries/useBag'
import useBagItems from '../hooks/queries/useBagItems'

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(2),
	},
}))

export default function BagsShowPage() {
	const { id } = useParams<{ id: string }>()
	const classes = useStyles()

	const { data: bag } = useBag(id, { queryParams: { relations: ['images'] } })
	const { data: bagItems } = useBagItems(bag?.id as string, {
		queryParams: { relations: ['item'] },
		enabled: Boolean(bag?.id),
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
					{bagItems &&
						bagItems.map((bagItem) => (
							<Grid item xs={12} md={6}>
								<BagItemCard bagId={bag.id} bagItem={bagItem} />
							</Grid>
						))}
				</Grid>
			</Grid>
		</Grid>
	)
}
