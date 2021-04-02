import {
	Box,
	Button,
	Link,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core'
import { useQueryClient } from 'react-query'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import useDeleteSession from '../hooks/mutations/useDeleteSession'
import useCurrentUser from '../hooks/queries/useCurrentUser'

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
}))

export default function Header() {
	const classes = useStyles()
	const queryClient = useQueryClient()

	const response = useCurrentUser({ retry: false })
	const { data: currentUser, error: currentUserError } = response

	const { mutate: deleteSession } = useDeleteSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
		},
	})

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
			{currentUser && !currentUserError ? (
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
