import { Box } from '@material-ui/core'
import ItemsList from '../components/ItemsList'
import NewItemInput from '../components/NewItemInput'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { Item, User, WithImages, WithItems } from '../types'

export default function MyItemsPage() {
	const { data: currentUser } = useCurrentUser<
		User & WithItems<Item & WithImages>
	>({
		queryParams: { relations: ['items', 'items.images'] },
	})

	if (!currentUser) return null

	return (
		<Box>
			<NewItemInput />
			{<ItemsList items={currentUser.items} />}
		</Box>
	)
}
