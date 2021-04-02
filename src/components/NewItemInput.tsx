import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import useCreateItem from '../hooks/mutations/useCreateItem'
import { Item } from '../types'
import { postItem } from '../api/items'

export default function NewItemInput() {
	const [name, setName] = useState('')
	const queryClient = useQueryClient()

	const { data: currentUser } = useCurrentUser()
	const { mutate: createItem } = useCreateItem({
		onSuccess: () => {
			queryClient.invalidateQueries([
				'items',
				{ userId: currentUser?.id },
			])
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
