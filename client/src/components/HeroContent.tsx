import {
	Box,
	Button,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(12, 0, 12),
		'background-image': "url('https://source.unsplash.com/random')",
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
}))

interface HeroContentProps {
	title: string
	button: { text: string; to: string }
}

export default function HeroContent({ title, button }: HeroContentProps) {
	const classes = useStyles()

	return (
		<Box className={classes.heroContent}>
			<Container maxWidth="sm">
				<Typography
					component="h1"
					variant="h2"
					align="center"
					gutterBottom
				>
					{title}
				</Typography>
				<Box className={classes.heroButtons}>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Button
								component={RouterLink}
								variant="contained"
								to={button.to}
								color="primary"
							>
								{button.text}
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}
