import { Box, Container } from '@material-ui/core'
import Header from './Header'

interface LayoutWrapperProps {
	children: any
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
	return (
		<Container maxWidth="lg">
			<Header />
			{children}
		</Container>
	)
}
