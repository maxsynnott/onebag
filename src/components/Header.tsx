import classes from '*.module.css'
import {
	Box,
	Button,
	Toolbar,
	Typography,
	Link,
	makeStyles,
} from '@material-ui/core'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
}))

export default function Header() {
	const classes = useStyles()
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

	const { mutate: deleteSession } = useMutation(
		async () => {
			const response = await axios.delete(
				'http://localhost:8080/sessions',
				{ withCredentials: true },
			)
			console.log(response)
			return response.data
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries('current-user')
			},
		},
	)

	const handleLogout = () => {
		deleteSession()
	}

	const { pathname } = useLocation()
	const hiddenPaths = ['/login', '/signup']
	if (hiddenPaths.includes(pathname)) return null

	return (
		<Toolbar className={classes.toolbar}>
			<Link component={RouterLink} to="/" color="inherit">
				<Typography variant="h5">onebag.club</Typography>
			</Link>

			<Box ml={2}>
				<Link component={RouterLink} to="/bags" color="inherit">
					<Typography>Bags</Typography>
				</Link>
			</Box>

			<Box ml={2}>
				<Link component={RouterLink} to="/items" color="inherit">
					<Typography>Items</Typography>
				</Link>
			</Box>

			<Box flexGrow={1} />
			{currentUser ? (
				<>
					<Typography>{currentUser.email}</Typography>
					<Button color="inherit" onClick={handleLogout}>
						Log out
					</Button>
				</>
			) : (
				<Link component={RouterLink} color="inherit" to="/login">
					Log in
				</Link>
			)}
		</Toolbar>
	)
}
