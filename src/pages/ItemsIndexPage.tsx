import { Box } from '@material-ui/core'
import NewItemInput from '../components/NewItemInput'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserItems from '../hooks/queries/useUserItems'

export default function ItemsIndexPage() {
	const { data: currentUser } = useCurrentUser()

	const { data: items } = useUserItems(currentUser?.id)

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
