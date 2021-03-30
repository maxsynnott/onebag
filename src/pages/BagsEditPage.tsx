import { Button, Container, makeStyles, TextField } from '@material-ui/core'
import axios from 'axios'
import MUIRichTextEditor from 'mui-rte'
import { FormEvent, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Bag } from '../types'
import { convertToRaw } from 'draft-js'

const enabledControls = [
	'title',
	'bold',
	'italic',
	'underline',
	'strikethrough',
	'highlight',
	'undo',
	'redo',
	'numberList',
	'bulletList',
	'quote',
	'clear',
	'code',
	'save',
]

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	root: {
		flexGrow: 1,
		maxWidth: 500,
	},
}))

export default function BagsEditPage() {
	const { id } = useParams<{ id: string }>()
	const classes = useStyles()

	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	const [enabled, setEnabled] = useState(true)
	const { isLoading, error, data: bag, refetch } = useQuery(
		'bags',
		async () => {
			const response = await axios.get(`http://localhost:8080/bags/${id}`)
			return response.data
		},
		{
			onSuccess: (bag: Bag) => {
				setName(bag.name)
				setDescription(bag.description)
				setEnabled(false)
			},
			enabled,
		},
	)

	const { mutate: patchBag } = useMutation(
		async () => {
			const response = await axios.patch(
				`http://localhost:8080/bags/${id}`,
				{ name, description },
				{ withCredentials: true },
			)
			return response.data
		},
		{
			onSuccess: () => {
				refetch()
			},
		},
	)

	const handlePatchBag = (e: FormEvent) => {
		e.preventDefault()
		patchBag()
	}

	return (
		<Container component="main" maxWidth="md">
			<div className={classes.paper}>
				<form className={classes.form} onSubmit={handlePatchBag}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="Name"
						name="name"
						placeholder="Indefinite travel in SE Asia"
						value={name}
						onChange={(e) => setName(e.target.value)}
						autoFocus
					/>
					<MUIRichTextEditor
						defaultValue={description}
						label="Start typing"
						controls={enabledControls}
						onChange={(editorState) => {
							// This is a shitty temp solution to an infinite loop
							if (description) {
								const contentState = editorState.getCurrentContent()
								const rawContentState = convertToRaw(
									contentState,
								)
								const stringifiedRawContentState = JSON.stringify(
									rawContentState,
								)
								console.log(stringifiedRawContentState)
								setDescription(stringifiedRawContentState)
							}
						}}
					/>
					ITEMS WILL GO HERE
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Update bag (THIS WILL BE REMOVED TO MAKE A FANCY FORM)
					</Button>
				</form>
			</div>
		</Container>
	)
}
