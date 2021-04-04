import { isArray } from 'util'
import { Image } from '../entities/Image'
import { ImageResponse } from '../types'
import { BaseService } from './BaseService'

const imageUrlPrefix = 'http://localhost:8080/images/'

export class ImageService extends BaseService<Image> {
	constructor() {
		super(Image)
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
