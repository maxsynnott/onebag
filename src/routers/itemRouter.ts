import { ItemController } from '../controllers/ItemController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const controller = new ItemController()

export default {
	'/items': {
		post: [ensureAuthenticated, controller.create],
	},
}
