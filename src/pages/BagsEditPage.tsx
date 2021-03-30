import {
	Button,
	Container,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core'
import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router'
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
			onSuccess: (d) => {
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
					<TextField
						variant="outlined"
						margin="normal"
						multiline
						fullWidth
						id="description"
						label="Description"
						name="description"
						placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere consectetur ea magnam tenetur recusandae. Tempora itaque repellendus nesciunt, quia odit tempore assumenda recusandae quo fugit a omnis quas unde."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						autoFocus
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Update bag
					</Button>
				</form>
			</div>
		</Container>
	)
}
