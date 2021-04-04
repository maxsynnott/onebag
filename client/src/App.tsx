import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import LayoutWrapper from './components/LayoutWrapper'
import { blue, red } from '@material-ui/core/colors'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const theme = createMuiTheme({
	palette: {
		primary: blue,
		secondary: red,
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<QueryClientProvider client={queryClient}>
					<LayoutWrapper>
						<AppRoutes />
					</LayoutWrapper>
				</QueryClientProvider>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
