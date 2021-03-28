import {
	AppBar,
	Box,
	Button,
	Toolbar,
	Typography,
	Link,
} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link component={RouterLink} to="/" color="inherit">
					<Typography variant="h5">Onebag.club</Typography>
				</Link>

				<Box ml={2}>
					<Link component={RouterLink} to="/bags" color="inherit">
						<Typography>Bags</Typography>
					</Link>
				</Box>

				<Box flexGrow={1} />
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	)
}
