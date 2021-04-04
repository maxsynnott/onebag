import { Box } from '@material-ui/core'
import ItemsList from '../components/ItemsList'
import NewItemInput from '../components/NewItemInput'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserItems from '../hooks/queries/useUserItems'

export default function MyItemsPage() {
	const { data: currentUser } = useCurrentUser()
	const { data: items } = useUserItems(currentUser?.id as string, {
		enabled: Boolean(currentUser?.id),
	})

	return (
		<Box>
			<NewItemInput />
			{items && <ItemsList items={items} />}
		</Box>
	)
}
