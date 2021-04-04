import passport from 'passport'
import { getRepository } from 'typeorm'
import { User } from '../entities/User'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'

export const initPassport = (app) => {
	const userRepository = getRepository(User)

	passport.serializeUser((user: User, done) => {
		done(null, user.id)
	})

	passport.deserializeUser(async (id, done) => {
		const user = await userRepository.findOne(id)
		done(null, user)
	})

	const localStrategy = new LocalStrategy(
		{ usernameField: 'email' },
		async (email, password, done) => {
			const user = await userRepository.findOne({ email })
			if (!user) done(null, false)
			const correctPassword = await bcrypt.compare(
				password,
				user.passwordHash,
			)
			if (!correctPassword) done(null, false)
			done(null, user)
		},
	)

	passport.use(localStrategy)

	app.use(passport.initialize())
	app.use(passport.session())
}
