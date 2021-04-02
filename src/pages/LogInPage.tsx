import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import useCreateSession from '../hooks/mutations/useCreateSession'

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
		marginTop: theme.spacing(1),
	},
	submitButton: {
		margin: theme.spacing(3, 0, 2),
	},
}))

export default function LogInPage() {
	const classes = useStyles()
	const queryClient = useQueryClient()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()

	const { mutate: createSession } = useCreateSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
			history.push('/')
		},
	})

	const handleSubmit = (e: any) => {
		e.preventDefault()

		createSession({ email, password })
	}

	return (
		<Container component="main" maxWidth="xs" className={classes.container}>
			<Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
				Log in
			</Typography>
			<form className={classes.form} onSubmit={handleSubmit}>
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
				{/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submitButton}
				>
					Sign In
				</Button>
				<Grid container>
					{/* <Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid> */}
					<Grid item>
						<Link
							component={RouterLink}
							to="/signup"
							variant="body2"
						>
							Don't have an account? Sign Up
						</Link>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}
