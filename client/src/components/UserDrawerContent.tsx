import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { User } from '../types'
import GuestUserDrawerContent from './GuestUserDrawerContent'
import LoggedInUserDrawerContent from './LoggedInUserDrawerContent'

const USER_DRAWER_CONTENT_WIDTH = 360

const useStyles = makeStyles((theme) => ({
	content: {
		width: USER_DRAWER_CONTENT_WIDTH,
	},
}))

interface UserDrawerContentProps {
	user?: User
	toggleDrawer: (newState?: boolean) => void
}

export default function UserDrawerContent({
	user,
	toggleDrawer,
}: UserDrawerContentProps) {
	const classes = useStyles()

	return (
		<Box className={classes.content}>
			{user ? (
				<LoggedInUserDrawerContent
					user={user}
					toggleDrawer={toggleDrawer}
				/>
			) : (
				<GuestUserDrawerContent toggleDrawer={toggleDrawer} />
			)}
		</Box>
	)
}
