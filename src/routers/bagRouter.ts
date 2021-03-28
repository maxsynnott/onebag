import { BagController } from '../controllers/BagController'
import { Router } from 'express'

const controller = new BagController()

const router = Router()
router.get('/:id', controller.show)
router.get('/', controller.index)
router.post('/', controller.create)

export default router
