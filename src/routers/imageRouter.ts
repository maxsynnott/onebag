import { Router } from 'express'
import multer from 'multer'
import { ImageController } from '../controllers/ImageController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import { RoutesObject } from '../types'
import applyRoutes from './applyRoutes'

// Upload to gcs in prod
const storage = multer.diskStorage({
	destination: 'public/images',
	filename: (_req, file, cb) => {
		const filename = Date.now() + '-' + file.originalname
		cb(null, filename)
	},
})

const upload = multer({ storage })
const controller = new ImageController()

const router = Router()

const routes: RoutesObject = {
	'/bags/:bagId/images': [
		{ method: 'get', handlers: [controller.bagIndex] },
		{
			method: 'post',
			handlers: [
				ensureAuthenticated,
				upload.single('image'),
				controller.createBagImage,
			],
		},
	],
}

applyRoutes(router, routes)

export default router
