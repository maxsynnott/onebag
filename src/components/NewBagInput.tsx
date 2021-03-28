import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

export default function NewBagInput() {
	const [title, setTitle] = useState('')
	const queryClient = useQueryClient()

	const { mutate: createBag } = useMutation(
		async () => {
			const response = await axios.post(
				'http://localhost:8080/bags',
				{ title },
				{ withCredentials: true },
			)
			return response.data
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('bags')
			},
		},
	)

	const handleCreateBag = () => {
		createBag()
	}

	return (
		<TextField
			value={title}
			onChange={(e) => setTitle(e.target.value)}
			label="Add a bag"
			placeholder="Bag name"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton onClick={handleCreateBag} size="small">
							<AddIcon />
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
}
