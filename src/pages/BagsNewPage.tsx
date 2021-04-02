import {
	Button,
	Container,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core'
import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router'
import useCreateBag from '../hooks/mutations/useCreateBag'
import { Bag } from '../types'

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
}))

export default function BagsNewPage() {
	const classes = useStyles()
	const [name, setName] = useState('')
	const history = useHistory()

	const { mutate: createBag } = useCreateBag({
		onSuccess: (bag: Bag) => {
			history.push(`/bags/${bag.id}/edit`)
		},
	})

	const handleCreateBag = (e: FormEvent) => {
		e.preventDefault()
		createBag({ name })
	}

	return (
		<Container component="main" maxWidth="md">
			<div className={classes.paper}>
				<Typography variant="h5">Create your onebag</Typography>
				<form className={classes.form} onSubmit={handleCreateBag}>
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
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{'Add items & more info'}
					</Button>
				</form>
			</div>
		</Container>
	)
}
