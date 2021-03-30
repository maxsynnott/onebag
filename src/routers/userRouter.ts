import { UserController } from '../controllers/UserController'

const controller = new UserController()

export default {
	'/users': { post: [controller.create] },
	'/users/current': { get: [controller.current] },
}
