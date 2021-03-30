import { Router } from 'express'
import { ItemController } from '../controllers/ItemController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const controller = new ItemController()

const router = Router()
router.post('/', ensureAuthenticated, controller.create)

export default router
