import { UserController } from '../controllers/UserController'
import { Router } from 'express'

const controller = new UserController()

const router = Router()
router.post('/', controller.create)

export default router
