import {
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import md5 from 'md5'
import React, { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import useDeleteSession from '../hooks/mutations/useDeleteSession'
import useCurrentUser from '../hooks/queries/useCurrentUser'

const drawerListWidth = 400

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	drawerList: {
		width: drawerListWidth,
	},
}))

export default function Header() {
	const [drawerOpen, setDrawerOpen] = useState(false)

	const classes = useStyles()
	const queryClient = useQueryClient()

	const response = useCurrentUser({ retry: false })
	const { data: currentUser, error: currentUserError } = response

	const { mutate: deleteSession } = useDeleteSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
		},
	})

	const emailToGravatarUrl = (email: string) => {
		const emailHash = md5(email.trim().toLowerCase())
		const defaultImg = 'retro'

		return `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImg}`
	}

	const handleLogout = () => {
		deleteSession()
	}

	const handleToggleDrawer = () => {
		setDrawerOpen(!drawerOpen)
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
				<Box>
					<Button
						aria-controls="account-menu"
						aria-haspopup="true"
						onClick={handleToggleDrawer}
					>
						<Avatar src={emailToGravatarUrl(currentUser.email)} />
					</Button>
					<Drawer anchor="right" open={drawerOpen}>
						<List className={classes.drawerList}>
							<ListItem button onClick={handleToggleDrawer}>
								<ListItemIcon>
									<ChevronRightIcon />
								</ListItemIcon>
							</ListItem>
							<Divider />
							<ListItem button>
								<ListItemText primary="Account" />
							</ListItem>
							<ListItem button onClick={handleLogout}>
								<ListItemText primary="Log out" />
							</ListItem>
						</List>
					</Drawer>
				</Box>
			) : (
				<Link component={RouterLink} color="inherit" to="/login">
					Log in
				</Link>
			)}
		</Toolbar>
	)
}
