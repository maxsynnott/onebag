import { Grid } from '@material-ui/core'
import BagCard from '../components/BagCard'
import { Bag, WithUser } from '../types'

interface BagsGridProps {
	bags: (Bag & WithUser)[]
}

export default function BagsGrid({ bags }: BagsGridProps) {
	return (
		<Grid container spacing={4}>
			{bags.map((bag: any) => (
				<Grid item key={bag.id} xs={12} sm={6} md={3}>
					<BagCard bag={bag} />
				</Grid>
			))}
		</Grid>
	)
}
