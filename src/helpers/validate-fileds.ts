import { UserValidationField } from '../types/index.js'

function isValidEmail(email: string) {
	// Non-whitespace and non-sign character
	// 1+ times
	// @
	// Non-whitespace and non-sign character
	// 1+ times
	// .
	// Non-whitespace and non-sign character
	// 1+ times
	const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const validValue = validator.test(email)
	return validValue
}

function isValidPassword(password: string) {
	const validValue = password?.length >= 5
	return validValue
}

// Returns error name or null if fields are valid
function validateFields(fieldsData: UserValidationField[]) {
	for (const fieldData of fieldsData) {
		const result = fieldData.validator(fieldData.value)
		const error = result ? null : fieldData.errorMessage
		if (error) {
			return error
		}
	}
	return null
}

export { validateFields, isValidEmail, isValidPassword }
