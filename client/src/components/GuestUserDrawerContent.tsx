import { Box, Button, IconButton, makeStyles } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React, { useState } from 'react'
import { HEADER_HEIGHT } from './Header'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

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
		height: HEADER_HEIGHT,
	},
}))

interface GuestUserDrawerContentProps {
	toggleDrawer: (newState?: boolean) => void
}

export default function GuestUserDrawerContent({
	toggleDrawer,
}: GuestUserDrawerContentProps) {
	const classes = useStyles()
	const [isLoginForm, setIsLoginForm] = useState(true)

	return (
		<Box>
			<Box className={classes.drawerHeader}>
				<Box>
					<IconButton onClick={() => toggleDrawer()}>
						<ChevronRightIcon />
					</IconButton>
				</Box>

				{isLoginForm ? (
					<Button onClick={() => setIsLoginForm(false)}>
						Don't have an account? Sign Up
					</Button>
				) : (
					<Button onClick={() => setIsLoginForm(true)}>
						Already have an account? Log In
					</Button>
				)}
			</Box>

			{isLoginForm ? <LoginForm /> : <SignUpForm />}
		</Box>
	)
}
