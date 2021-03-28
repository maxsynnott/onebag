import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">Onebag.club</Typography>
				<Box flexGrow={1} />
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	)
}
