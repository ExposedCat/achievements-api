import type { HandlerData, ErrorHandler } from '../types/index.js'
import { HandlerType, ResponseName, ResultType } from '../types/index.js'
import { respond } from '../services/index.js'

const handler: ErrorHandler = async (error, _req, res) => {
	console.trace(error)
	respond(res, ResultType.Error, ResponseName.Unknown)
}

const data: HandlerData = {
	method: HandlerType.Middleware,
	handler
}

export { data }
