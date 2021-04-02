import { DeepPartial, getRepository } from 'typeorm'
import { Bag } from '../entities/Bag'
import { Image } from '../entities/Image'
import { ImageResponse } from '../types'

const imageUrlPrefix = 'http://localhost:8080/images/'

export class ImageService {
	private imageRepository = getRepository(Image)
	private bagRepository = getRepository(Bag)

	async create(attributes: DeepPartial<Image>) {
		const image = new Image()
		Object.assign(image, attributes)

		return this.imageRepository.save(image)
	}

	async findAllByBagId(bagId: string) {
		const bag = await this.bagRepository.findOne({
			where: { id: bagId },
			relations: ['images'],
		})

		return bag.images
	}

	mapImageToResponseBody(image: Image): ImageResponse {
		const { filename, ...filteredFields } = image
		return { ...filteredFields, url: imageUrlPrefix + filename }
	}

	mapImagesToResponseBody(images: Image[]): ImageResponse[] {
		return images.map(this.mapImageToResponseBody)
	}
}
