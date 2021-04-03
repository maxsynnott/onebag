import {
	Avatar,
	Box,
	Button,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Typography,
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import md5 from 'md5'
import React, { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import useDeleteSession from '../hooks/mutations/useDeleteSession'
import { User } from '../types'
import { headerHeight } from './Header'

interface LoggedInUserButtonProps {
	user?: User
}

const drawerListWidth = 360

const useStyles = makeStyles((theme) => ({
	drawerList: {
		width: drawerListWidth,
	},
	drawerHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: theme.spacing(2),
		borderBottom: `1px solid ${theme.palette.divider}`,
		height: headerHeight,
	},
}))

export default function LoggedInUserButton({ user }: LoggedInUserButtonProps) {
	const classes = useStyles()
	const queryClient = useQueryClient()
	const history = useHistory()

	const [drawerOpen, setDrawerOpen] = useState(false)

	const { mutate: deleteSession } = useDeleteSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
		},
	})

	const handleLogout = () => {
		deleteSession()
	}

	const handleToggleDrawer = () => {
		setDrawerOpen(!drawerOpen)
	}

	const navigateToThenClose = (path: string) => {
		setDrawerOpen(false)
		history.push(path)
	}

	// Replace with login logic inside drawer
	if (!user) {
		return (
			<Link component={RouterLink} color="inherit" to="/login">
				Log in
			</Link>
		)
	}

	const gravatarUrl = emailToGravatarUrl(user.email)

	return (
		<Box>
			<Button onClick={handleToggleDrawer}>
				<Avatar src={gravatarUrl} />
			</Button>

			<Drawer anchor="right" open={drawerOpen}>
				<Box className={classes.drawerHeader}>
					<Box>
						<IconButton onClick={handleToggleDrawer}>
							<ChevronRightIcon />
						</IconButton>
					</Box>

					<Box display="flex" alignItems="center">
						<Box mr={2}>
							<Typography>Hello {user.username}</Typography>
						</Box>

						<Avatar src={gravatarUrl} />
					</Box>
				</Box>

				<List className={classes.drawerList}>
					<ListItem
						button
						onClick={() => navigateToThenClose('/my/bags')}
					>
						<ListItemText primary="My bags" />
					</ListItem>

					<ListItem
						button
						onClick={() => navigateToThenClose('/my/items')}
					>
						<ListItemText primary="My items" />
					</ListItem>

					<ListItem button onClick={handleLogout} color="secondary">
						<ListItemText primary="Log out" />
					</ListItem>
				</List>
			</Drawer>
		</Box>
	)
}

const emailToGravatarUrl = (email: string) => {
	const emailHash = md5(email.trim().toLowerCase())
	const defaultImg = 'retro'

	return `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImg}`
}
