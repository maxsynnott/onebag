import { Box } from '@material-ui/core'
import ItemListItem from '../components/ItemListItem'
import NewItemInput from '../components/NewItemInput'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import { Item, User, WithImages, WithItems } from '../types'

export default function ItemsIndexPage() {
	const { data: currentUser } = useCurrentUser<
		User & WithItems<Item & WithImages>
	>({
		queryParams: { relations: ['items', 'items.images'] },
	})

	return (
		<Box>
			<NewItemInput />
			<ul>
				{currentUser?.items?.map((item) => (
					<ItemListItem item={item} />
				))}
			</ul>
		</Box>
	)
}
