import { BagController } from '../controllers/BagController'
import { Router } from 'express'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const controller = new BagController()

const router = Router()
router.get('/:id', controller.show)
router.get('/', controller.index)

router.post('/', ensureAuthenticated, controller.create)

router.patch('/:id', ensureAuthenticated, controller.update)

export default router
