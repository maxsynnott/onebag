import { Box } from '@material-ui/core'
import axios from 'axios'
import { useQuery } from 'react-query'
import NewItemInput from '../components/NewItemInput'

export default function ItemsIndexPage() {
	const { data: currentUser } = useQuery('current-user', async () => {
		const response = await axios.get(
			'http://localhost:8080/users/current',
			{
				withCredentials: true,
			},
		)
		return response.data
	})

	const { data: items } = useQuery(
		['items', { userId: currentUser?.id }],
		async () => {
			const response = await axios.get(
				`http://localhost:8080/users/${currentUser?.id}/items`,
			)
			return response.data
		},
	)

	return (
		<Box>
			<NewItemInput />
			<ul>
				{items?.map((item: any) => (
					<li key={item.id}>{JSON.stringify(item)}</li>
				))}
			</ul>
		</Box>
	)
}
