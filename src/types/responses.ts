import { ResponseName } from './index.js'

interface ServiceResponseError {
	isError: true
	data: {
		errorMessage: ResponseName
	}
}

interface ServiceResponseSuccess {
	isError: false
	data: object
}

type ServiceResponse = ServiceResponseSuccess | ServiceResponseError

export { ServiceResponse }
