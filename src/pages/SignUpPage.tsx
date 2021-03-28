import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submitButton: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function SignUpPage() {
	const classes = useStyles()
	const history = useHistory()
	const queryClient = useQueryClient()

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { mutate: createSession } = useMutation(
		async () => {
			const response = await axios.post(
				'http://localhost:8080/sessions',
				{ email, password },
				{ withCredentials: true },
			)
			return response.data
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('current-user')
				history.push('/')
			},
		},
	)

	const { mutate: createUser } = useMutation(async () => {
		const response = await axios.post('http://localhost:8080/users', {
			email,
			password,
			username,
		})
		return response.data
	})

	const handleSubmit = async (event: any) => {
		event.preventDefault()

		await createUser(undefined, { onSuccess: () => createSession() })
	}

	return (
		<Container component="main" maxWidth="xs" className={classes.container}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Sign up
			</Typography>
			<form className={classes.form} onSubmit={handleSubmit}>
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
					{/* <Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									value="allowExtraEmails"
									color="primary"
								/>
							}
							label="I want to receive inspiration, marketing promotions and updates via email."
						/>
					</Grid> */}
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submitButton}
				>
					Sign Up
				</Button>
				<Grid container>
					<Grid item>
						<Link
							component={RouterLink}
							to="/login"
							variant="body2"
						>
							Already have an account? Log in
						</Link>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}
