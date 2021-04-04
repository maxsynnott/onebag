import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import useCreateItem from '../hooks/mutations/useCreateItem'
import useCurrentUser from '../hooks/queries/useCurrentUser'

export default function NewItemInput() {
	const [name, setName] = useState('')
	const queryClient = useQueryClient()

	const { data: currentUser } = useCurrentUser()
	const { mutate: createItem } = useCreateItem({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', currentUser?.id, 'items'])
		},
	})

	const handleCreateItem = () => {
		createItem({ name })
	}

	return (
		<TextField
			value={name}
			onChange={(e) => setName(e.target.value)}
			label="Add a Item"
			placeholder="Item name"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton onClick={handleCreateItem} size="small">
							<AddIcon />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
}
