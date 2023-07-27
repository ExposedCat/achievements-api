import { UserModel, ServiceResponse, ResponseName } from '../types/index.js'

async function registerUser(
	this: UserModel,
	email: string,
	password: string
): Promise<ServiceResponse> {
	const userExists = await this.checkExists(email)
	if (userExists) {
		return {
			isError: true,
			data: {
				errorMessage: ResponseName.EmailInUse
			}
		}
	}
	await this.createNew(email, password)
	const { isError, data } = await this.login(email, password)
	if (isError) {
		return {
			isError: true,
			data: {
				errorMessage: ResponseName.AutoLoginError
			}
		}
	}
	return {
		isError: false,
		data
	}
}

export { registerUser }
