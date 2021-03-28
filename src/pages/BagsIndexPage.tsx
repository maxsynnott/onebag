import { Link } from '@material-ui/core'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link as RouterLink } from 'react-router-dom'

export default function BagsIndexPage() {
	const url = 'http://localhost:8080/bags'

	const { isLoading, error, data: bags } = useQuery(url, async () => {
		const response = await axios.get(url)
		return response.data
	})

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error...</p>

	return (
		<ul>
			{bags.map((bag: any) => (
				<li key={bag.id}>
					<Link component={RouterLink} to={'/bags/' + bag.id}>
						{bag.title}
					</Link>
				</li>
			))}
		</ul>
	)
}
