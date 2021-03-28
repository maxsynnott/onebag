import { Router } from 'express'
import bagRouter from './bagRouter'
import sessionRouter from './sessionRouter'
import userRouter from './userRouter'

const router = Router()
router.use('/bags', bagRouter)
router.use('/users', userRouter)
router.use('/sessions', sessionRouter)

export { router }
