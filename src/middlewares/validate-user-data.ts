import { UserValidationField, ResponseName, ResultType } from '../types/index.js'
import { Request, Response, NextFunction } from 'express'
import { validateFields, isValidEmail, isValidPassword } from '../helpers/index.js'
import { respond } from '../services/index.js'

function validateUserData(req: Request, res: Response, next: NextFunction) {
	const fieldsData: UserValidationField[] = [
		{
			value: req.body.email,
			validator: isValidEmail,
			errorMessage: ResponseName.InvalidEmail
		},
		{
			value: req.body.password,
			validator: isValidPassword,
			errorMessage: ResponseName.InvalidPassword
		}
	]
	const errorMessage = validateFields(fieldsData)
	if (errorMessage) {
		respond(res, ResultType.Error, errorMessage)
	} else {
		next()
	}
}

export { validateUserData }
