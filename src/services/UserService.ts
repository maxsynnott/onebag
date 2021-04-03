import { getRepository } from 'typeorm'
import { User } from '../entities/User'
import bcrypt from 'bcrypt'
import { UserResponse } from '../types'
import md5 from 'md5'
import { isArray } from 'util'

export class UserService {
	private userRepository = getRepository(User)

	async create({
		username,
		email,
		password,
	}: {
		username: string
		email: string
		password: string
	}) {
		const user = new User()

		user.username = username
		user.email = email

		const saltRounds = 10
		const passwordHash = await bcrypt.hash(password, saltRounds)
		user.passwordHash = passwordHash

		return this.userRepository.save(user)
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
