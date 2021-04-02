import { Button, Container, makeStyles, TextField } from '@material-ui/core'
import { convertToRaw } from 'draft-js'
import MUIRichTextEditor from 'mui-rte'
import { FormEvent, useState } from 'react'
import { useParams } from 'react-router'
import useUpdateBag from '../hooks/mutations/useUpdateBag'
import useBag from '../hooks/queries/useBag'
import { Bag } from '../types'

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
	// Clean this shit up
	const { refetch } = useBag(id, {
		onSuccess: (bag: Bag) => {
			setName(bag.name)
			setDescription(bag.description)
			setEnabled(false)
		},
		enabled,
	})

	const { mutate: updateBag } = useUpdateBag(id, {
		onSuccess: () => {
			refetch()
		},
	})

	const handleUpdateBag = (e: FormEvent) => {
		e.preventDefault()
		updateBag({ name, description })
	}

	return (
		<Container component="main" maxWidth="md">
			<div className={classes.paper}>
				<form className={classes.form} onSubmit={handleUpdateBag}>
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
