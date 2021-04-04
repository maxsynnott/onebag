import bcrypt from 'bcrypt'
import md5 from 'md5'
import { getRepository } from 'typeorm'
import { isArray } from 'util'
import { User } from '../entities/User'
import { UserResponse } from '../types'
import { BaseService } from './BaseService'

export class UserService extends BaseService<User> {
	constructor() {
		super(User)
	}

	async saveNewUser(email: string, username: string, password: string) {
		const saltRounds = 10
		const passwordHash = await bcrypt.hash(password, saltRounds)

		return this.repository.save({ email, username, passwordHash })
	}

	userToResponseMapper(user: User): UserResponse {
		const { passwordHash, ...filteredUser } = user
		const gravatarUrl = this.emailToGravatarUrl(user.email)
		return { ...filteredUser, avatarUrl: gravatarUrl }
	}

	mapToResponseBody(input: User | User[]): UserResponse | UserResponse[] {
		return isArray(input)
			? input.map(this.userToResponseMapper)
			: this.userToResponseMapper(input)
	}

	emailToGravatarUrl(email: string): string {
		const emailHash = md5(email.trim().toLowerCase())
		const defaultImg = 'retro'

		return `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImg}`
	}
}
