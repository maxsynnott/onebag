import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

export default function NewItemInput() {
	const [name, setName] = useState('')
	const queryClient = useQueryClient()

	const { data: currentUser } = useQuery('current-user', async () => {
		const response = await axios.get(
			'http://localhost:8080/users/current',
			{
				withCredentials: true,
			},
		)
		return response.data
	})

	const { mutate: createItem } = useMutation(
		async () => {
			const response = await axios.post(
				'http://localhost:8080/items',
				{ name, user: { id: currentUser?.id } },
				{ withCredentials: true },
			)
			return response.data
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([
					'items',
					{ userId: currentUser?.id },
				])
			},
		},
	)

	const handleCreateItem = () => {
		createItem()
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
