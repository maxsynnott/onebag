import { DeepPartial, getRepository } from 'typeorm'
import { isArray } from 'util'
import { Bag } from '../entities/Bag'
import { Image } from '../entities/Image'
import { Item } from '../entities/Item'
import { ImageResponse } from '../types'

const imageUrlPrefix = 'http://localhost:8080/images/'

export class ImageService {
	private imageRepository = getRepository(Image)
	private bagRepository = getRepository(Bag)
	private itemRepository = getRepository(Item)

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

	async findAllByItemId(itemId: string) {
		const item = await this.itemRepository.findOne({
			where: { id: itemId },
			relations: ['images'],
		})

		return item.images
	}

	imageToResponseMapper(image: Image): ImageResponse {
		const { filename, ...filteredFields } = image
		return { ...filteredFields, url: imageUrlPrefix + filename }
	}

	mapToResponseBody(input: Image | Image[]): ImageResponse | ImageResponse[] {
		return isArray(input)
			? input.map(this.imageToResponseMapper)
			: this.imageToResponseMapper(input)
	}
}
