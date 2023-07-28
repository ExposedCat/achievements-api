import type { BasicHandler, HandlerData } from '../types/index.js'
import { HandlerType, ResponseName, ResultType } from '../types/index.js'
import { respond } from '../services/index.js'

const handler: BasicHandler = async (req, res) => {
	respond(res, ResultType.Success, ResponseName.Root)
}

const data: HandlerData = {
	method: HandlerType.Get,
	path: '/api',
	handler
}

export { data }
