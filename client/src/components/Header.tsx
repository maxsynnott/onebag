import { Box, Link, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import useCurrentUser from '../hooks/queries/useCurrentUser'
import UserDrawer from './UserDrawer'

export const HEADER_HEIGHT = 64

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		height: HEADER_HEIGHT,
	},
}))

export default function Header() {
	const classes = useStyles()

	const response = useCurrentUser({ retry: false })
	const { data: currentUser } = response

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

			<Box flexGrow={1} />

			<UserDrawer user={currentUser} />
		</Toolbar>
	)
}
