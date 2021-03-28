import { UserController } from '../controllers/UserController'
import { Router } from 'express'
import passport from 'passport'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const controller = new UserController()

const router = Router()
router.post('/', controller.create)
router.get('/current', controller.current)

export default router
