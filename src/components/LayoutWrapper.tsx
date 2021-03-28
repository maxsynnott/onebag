import { Box } from '@material-ui/core'
import Header from './Header'

interface LayoutWrapperProps {
	children: any
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
	return (
		<Box>
			<Header />
			{children}
		</Box>
	)
}
