import { Switch, Route } from 'react-router-dom'
import BagsShowPage from '../pages/BagsShowPage'
import BagsIndexPage from '../pages/BagsIndexPage'
import FavoritesPage from '../pages/FavoritesPage'
import BagsNewPage from '../pages/BagsNewPage'
import BagsEditPage from '../pages/BagsEditPage'
import ItemsIndexPage from '../pages/ItemsIndexPage'
import MyBagsPage from '../pages/MyBagsPage'
import MyItemsPage from '../pages/MyItemsPage'
import MyWishListPage from '../pages/MyWishListPage'

export default function AppRoutes() {
	return (
		<Switch>
			<Route path="/" exact={true} component={BagsIndexPage} />
			<Route path="/items" exact={true} component={ItemsIndexPage} />
			<Route path="/bags" exact={true} component={BagsIndexPage} />
			<Route path="/bags/new" exact={true} component={BagsNewPage} />
			<Route path="/bags/:id/edit" component={BagsEditPage} />
			<Route path="/bags/:id" component={BagsShowPage} />
			<Route path="/my/bags" exact={true} component={MyBagsPage} />
			<Route path="/my/items" exact={true} component={MyItemsPage} />
			<Route
				path="/my/wishlist"
				exact={true}
				component={MyWishListPage}
			/>
			<Route path="/favorites" exact={true} component={FavoritesPage} />
		</Switch>
	)
}
