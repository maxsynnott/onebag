import { Box } from '@material-ui/core'
import ItemListItem from '../components/ItemListItem'
import NewItemInput from '../components/NewItemInput'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useUserItems from '../hooks/queries/useUserItems'
import { Item } from '../types'

export default function ItemsIndexPage() {
	const { data: currentUser } = useCurrentUser()
	const { data: items } = useUserItems(currentUser?.id as string, {
		enabled: Boolean(currentUser?.id),
	})

	return (
		<Box>
			<NewItemInput />
			<ul>
				{items?.map((item: Item) => (
					<ItemListItem item={item} />
				))}
			</ul>
		</Box>
	)
}
