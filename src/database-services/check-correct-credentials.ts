import { UserModel, CredentialsValidaton } from '../types/index.js'
import { compare } from '../helpers/index.js'

async function correctCredentials(
	this: UserModel,
	email: string,
	password: string
): Promise<CredentialsValidaton> {
	const user = await this.getByEmail(email)
	if (!user) {
		return { isCorrect: false, userId: null }
	}
	const isCorrect = await compare(password, user.password)
	return { isCorrect, userId: user._id }
}

export { correctCredentials }
