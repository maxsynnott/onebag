import { Button, Grid, TextField } from '@material-ui/core'
import React, { FormEvent, useState } from 'react'
import { useQueryClient } from 'react-query'
import useCreateSession from '../hooks/mutations/useCreateSession'
import useCreateUser from '../hooks/mutations/useCreateUser'

export default function SignUpForm() {
	const queryClient = useQueryClient()

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { mutate: createSession } = useCreateSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
		},
	})

	const { mutate: createUser } = useCreateUser({
		onSuccess: () => createSession({ email, password }),
	})

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		createUser({
			email,
			password,
			username,
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						autoComplete="username"
						name="username"
						variant="outlined"
						required
						fullWidth
						id="username"
						label="Username"
						autoFocus
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Grid>
			</Grid>
			<Button type="submit" fullWidth variant="contained" color="primary">
				Sign Up
			</Button>
		</form>
	)
}
