import {
	ResultType,
	Error,
	ErrorType,
	Success,
	ResponseName,
	Responses
} from '../types/index.js'

import { Response } from 'express'

function error(code: number, type: ErrorType, message: string) {
	const response: Error = {
		code,
		response: {
			isError: true,
			type,
			message
		}
	}
	return response
}

function success(message: string) {
	const response: Success = {
		code: 200,
		response: {
			isError: false,
			message,
			data: {}
		}
	}
	return response
}

function formResponse(type: ResultType, name: ResponseName, data = {}) {
	const responses: Responses = {
		[ResultType.Error]: {
			[ResponseName.UserNotFound]: error(
				401,
				ErrorType.Unauthorized,
				'User not found'
			),
			[ResponseName.InvalidCredentials]: error(
				401,
				ErrorType.Unauthorized,
				'Invalid email or password'
			),
			[ResponseName.AutoLoginError]: error(
				500,
				ErrorType.Internal,
				'User registered susccessfully, but internal error occurred while trying to auto-login. You should do it manually'
			),
			[ResponseName.PageNotFound]: error(
				404,
				ErrorType.InvalidInput,
				'Page not found'
			),
			[ResponseName.EmailInUse]: error(
				400,
				ErrorType.InvalidInput,
				'This email is already in use'
			),
			[ResponseName.Unknown]: error(
				503,
				ErrorType.Internal,
				'Internal error occurred. Please try again later'
			),
			[ResponseName.Unauthorized]: error(
				401,
				ErrorType.Unauthorized,
				'User is not authorized or authorization token is expired'
			),
			[ResponseName.InvalidEmail]: error(
				400,
				ErrorType.InvalidInput,
				'Email is invalid'
			),
			[ResponseName.InvalidPassword]: error(
				400,
				ErrorType.InvalidInput,
				'Password is invalid: should be at least 5 characters long'
			),
			[ResponseName.InvalidFirstName]: error(
				400,
				ErrorType.InvalidInput,
				'First name is invalid: should be at least 2 characters long'
			),
			[ResponseName.InvalidLastName]: error(
				400,
				ErrorType.InvalidInput,
				'Last name is invalid: should be at least 2 characters long'
			),
			[ResponseName.InvalidPhoneNumber]: error(
				400,
				ErrorType.InvalidInput,
				'Phone number is invalid: should be at least 4 and not more than 15 digits long (except optional country code)'
			),
			[ResponseName.InvalidAddress]: error(
				400,
				ErrorType.InvalidInput,
				'Address is invalid'
			)
		},
		[ResultType.Success]: {
			[ResponseName.SignedIn]: success('User successfully signed in'),
			[ResponseName.SignedUp]: success('User successfully signed up'),
			[ResponseName.Root]: success(
				'Welcome here. Check docs for instructions how to use this API. Use current URL as main API endpoint'
			),
			[ResponseName.ContactAdded]: success('Contact successfully added')
		}
	}
	let responseObject = responses[type][name]
	if (!responseObject) {
		console.error(`Unknown "${type}" response "${name}"`)
		return responses.error.unknown as Error
	}
	if (!responseObject.response.isError) {
		responseObject.response.data = data
	}
	return responseObject
}

function respond(
	res: Response,
	type: ResultType,
	name: ResponseName,
	data = {}
) {
	const { code, response } = formResponse(type, name, data)
	return res.status(code).json(response)
}

export { respond }
