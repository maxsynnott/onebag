import { Switch, Route } from 'react-router-dom'
import BagShowPage from '../pages/BagShowPage'
import HomePage from '../pages/HomePage'

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/" exact={true} component={HomePage} />
			<Route path="/bags/:id" component={BagShowPage} />
		</Switch>
	)
}
