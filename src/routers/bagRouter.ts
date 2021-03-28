import { BagController } from '../controllers/BagController'
import { Router } from 'express'

const controller = new BagController()

const router = Router()
router.get('/', controller.index)

export default router
