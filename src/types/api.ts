enum ResultType {
	Error = 'error',
	Success = 'success'
}

enum ErrorType {
	Unauthorized = 'unauthorized',
	Internal = 'internal',
	InvalidInput = 'invalidInput'
}

enum ResponseName {
	UserNotFound = 'userNotFound',
	InvalidCredentials = 'invalidCredentials',
	AutoLoginError = 'autoLoginError',
	PageNotFound = 'pageNotFound',
	EmailInUse = 'emailInUse',
	Unknown = 'unknown',
	Unauthorized = 'unauthorized',
	InvalidEmail = 'invalidEmail',
	InvalidPassword = 'invalidPassword',
	InvalidFirstName = 'invalidFirstName',
	InvalidLastName = 'invalidLastName',
	InvalidPhoneNumber = 'invalidPhoneNumber',
	InvalidAddress = 'invalidAddress',
	SignedIn = 'signedIn',
	SignedUp = 'signedUp',
	Root = 'root',
	ContactAdded = 'contactAdded'
}

interface Success {
	code: 200
	response: {
		isError: false
		message: string
		data: object
	}
}

interface Error {
	code: number
	response: {
		isError: true
		type: ErrorType
		message: string
	}
}

interface Responses {
	[ResultType.Error]: { [key in ResponseName]?: Error }
	[ResultType.Success]: { [key in ResponseName]?: Success }
}

export { ResultType, Error, ErrorType, ResponseName, Success, Responses }
