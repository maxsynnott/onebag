import { Router } from 'express'
import bagRouter from './bagRouter'

const router = Router()
router.use('/bags', bagRouter)

export { router }
