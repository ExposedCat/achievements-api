import { User, UserModel } from '../types/index.js'
import { encrypt } from '../helpers/index.js'

async function createUser(this: UserModel, email: string, password: string) {
	const encryptedPassword = await encrypt(password)
	const user = await this.create({
		email,
		password: encryptedPassword
	})
	return user as User
}

export { createUser }
