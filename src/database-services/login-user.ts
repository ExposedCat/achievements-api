import { ResponseName, ServiceResponse, UserModel } from '../types/index.js'
import { generateJwt } from '../helpers/index.js'

async function loginUser(
	this: UserModel,
	email: string,
	password: string
): Promise<ServiceResponse> {
	const { isCorrect, userId } = await this.correctCredentials(email, password)
	if (!isCorrect) {
		return {
			isError: true,
			data: {
				errorMessage: ResponseName.InvalidCredentials
			}
		}
	}
	const userData = { data: { userId } }
	const { token, error } = await generateJwt(userData)
	if (error) {
		return {
			isError: true,
			data: {
				errorMessage: ResponseName.Unknown
			}
		}
	}
	return {
		isError: false,
		data: {
			loginToken: token
		}
	}
}

export { loginUser }
