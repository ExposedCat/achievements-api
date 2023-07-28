import type { ResponseName } from './index.js'
import type { ObjectId } from 'mongoose'

interface UserValidationField {
	value: string
	validator: (value: string) => boolean
	errorMessage: ResponseName
}

interface JwtUserData {
	data: {
		userId: ObjectId
	}
}

interface CorrectCredentials {
	isCorrect: true
	userId: ObjectId
}

interface IncorrectCredentials {
	isCorrect: false
	userId: null
}

type CredentialsValidaton = CorrectCredentials | IncorrectCredentials

export {
	UserValidationField,
	JwtUserData,
	CredentialsValidaton,
	CorrectCredentials,
	IncorrectCredentials
}
