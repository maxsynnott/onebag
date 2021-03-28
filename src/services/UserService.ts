import { getRepository } from 'typeorm'
import { User } from '../entities/User'
import bcrypt from 'bcrypt'

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
}
