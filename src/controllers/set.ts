import { HandlerData, HandlerType } from '../types/index.js'
import { Express, RequestHandler } from 'express'
import {
	rootControllerData,
	unknownErrorControllerData,
	pageNotFoundControllerData,
	registerControllerData,
	loginControllerData
} from '../controllers/index.js'

function setHandler(app: Express, handlerData: HandlerData) {
	if (handlerData.method === HandlerType.Middleware) {
		app.use(handlerData.handler as RequestHandler)
	} else {
		const apply = app[handlerData.method].bind(app)
		const validations = handlerData.validations?.map(
			validation => validation as RequestHandler
		)
		apply(
			handlerData.path,
			...(validations || []),
			handlerData.handler as RequestHandler
		)
	}
}

function setHandlers(app: Express) {
	setHandler(app, rootControllerData)
	setHandler(app, loginControllerData)
	setHandler(app, registerControllerData)

	setHandler(app, pageNotFoundControllerData)
	setHandler(app, unknownErrorControllerData)
}

export { setHandlers }
