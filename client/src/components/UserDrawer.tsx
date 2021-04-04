import { Avatar, Box, Button, Drawer } from '@material-ui/core'
import React, { useState } from 'react'
import { User } from '../types'
import UserDrawerContent from './UserDrawerContent'

interface UserDrawerProps {
	user?: User
}

export default function UserDrawer({ user }: UserDrawerProps) {
	const [drawerOpen, setDrawerOpen] = useState(false)

	const toggleDrawer = (newState?: boolean) => {
		typeof newState === 'boolean'
			? setDrawerOpen(newState)
			: setDrawerOpen(!drawerOpen)
	}

	return (
		<Box>
			<Button onClick={() => toggleDrawer()}>
				{user ? <Avatar src={user.avatarUrl} /> : 'Log in'}
			</Button>

			<Drawer anchor="right" open={drawerOpen}>
				<UserDrawerContent user={user} toggleDrawer={toggleDrawer} />
			</Drawer>
		</Box>
	)
}
