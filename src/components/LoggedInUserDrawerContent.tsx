import {
	Avatar,
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	Typography,
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React from 'react'
import { useQueryClient } from 'react-query'
import { useHistory } from 'react-router-dom'
import useDeleteSession from '../hooks/mutations/useDeleteSession'
import { User } from '../types'
import { HEADER_HEIGHT } from './Header'

const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingRight: theme.spacing(2),
		borderBottom: `1px solid ${theme.palette.divider}`,
		height: HEADER_HEIGHT,
	},
}))

interface LoggedInUserDrawerContentProps {
	user: User
	toggleDrawer: (newState?: boolean) => void
}

export default function LoggedInUserDrawerContent({
	user,
	toggleDrawer,
}: LoggedInUserDrawerContentProps) {
	const classes = useStyles()
	const history = useHistory()
	const queryClient = useQueryClient()

	const navigateToThenClose = (path: string) => {
		toggleDrawer(false)
		history.push(path)
	}

	const { mutate: deleteSession } = useDeleteSession({
		onSuccess: () => {
			queryClient.invalidateQueries(['users', 'current'])
		},
	})

	const handleLogout = () => {
		deleteSession()
	}

	return (
		<Box>
			<Box className={classes.header}>
				<Box>
					<IconButton onClick={() => toggleDrawer()}>
						<ChevronRightIcon />
					</IconButton>
				</Box>

				<Box display="flex" alignItems="center">
					<Box mr={2}>
						<Typography>Hello {user.username}</Typography>
					</Box>

					<Avatar src={user.avatarUrl} />
				</Box>
			</Box>

			<List>
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
		</Box>
	)
}
