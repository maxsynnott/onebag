import { Switch, Route } from 'react-router-dom'
import BagsShowPage from '../pages/BagsShowPage'
import BagsIndexPage from '../pages/BagsIndexPage'
import HomePage from '../pages/HomePage'

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/" exact={true} component={HomePage} />
			<Route path="/bags" exact={true} component={BagsIndexPage} />
			<Route path="/bags/:id" component={BagsShowPage} />
		</Switch>
	)
}
