import { TextField, Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Link, useHistory } from 'react-router-dom'
import useCreateSession from '../hooks/mutations/useCreateSession'

export default function LoginForm() {
	const queryClient = useQueryClient()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()

	const { mutate: createSession } = useCreateSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
		},
	})

	const handleSubmit = (e: any) => {
		e.preventDefault()

		createSession({ email, password })
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				name="email"
				label="Email Address"
				autoComplete="email"
				autoFocus
			/>
			<TextField
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="password"
				name="password"
				label="Password"
				type="password"
				autoComplete="current-password"
			/>
			<Button type="submit" fullWidth variant="contained" color="primary">
				Sign In
			</Button>
		</form>
	)
}
