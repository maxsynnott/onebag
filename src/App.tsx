import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React from 'react'
import LayoutWrapper from './components/LayoutWrapper'
import { blue, red } from '@material-ui/core/colors'

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
				<LayoutWrapper>
					<AppRoutes />
				</LayoutWrapper>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
