import { BagController } from '../controllers/BagController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const controller = new BagController()

export default {
	'/bags': {
		get: [controller.index],
		post: [ensureAuthenticated, controller.create],
	},
	'/bags/:id': {
		get: [controller.show],
		patch: [ensureAuthenticated, controller.update],
	},
}
