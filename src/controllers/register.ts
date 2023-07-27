import {
	ResponseName,
	ResultType,
	HandlerData,
	HandlerType,
	UserAuthData,
	BasicHandler
} from '../types/index.js'
import { User } from '../models/index.js'
import { validateUserData } from '../middlewares/index.js'
import { respond } from '../services/index.js'

const handler: BasicHandler = async (req, res, next) => {
	const { email, password } = req.body as UserAuthData
	try {
		const { isError, data } = await User.register(
			email.toLowerCase(),
			password
		)
		if (isError) {
			respond(res, ResultType.Error, data.errorMessage)
			return
		}
		respond(res, ResultType.Success, ResponseName.SignedUp, data)
	} catch (error) {
		console.trace(error)
		respond(res, ResultType.Error, ResponseName.Unknown)
		return
	}
}

const data: HandlerData = {
	method: HandlerType.Post,
	path: '/api/users/register',
	validations: [validateUserData],
	handler
}

export { data }
