import { Request, Response, NextFunction } from 'express'

type ErrorHandler = (
	error: unknown,
	req: Request,
	res: Response,
	next: NextFunction
) => void

type BasicHandler = (req: Request, res: Response, next: NextFunction) => void

type Handler = BasicHandler | ErrorHandler

enum HandlerType {
	Middleware,
	Get = 'get',
	Post = 'post'
}

interface HandlerRouteData {
	method: HandlerType.Get | HandlerType.Post
	handler: Handler
	path: string
	validations?: Handler[]
}

interface HandlerMiddlewareData {
	method: HandlerType.Middleware
	handler: Handler
	validations?: Handler[]
}

type HandlerData = HandlerRouteData | HandlerMiddlewareData

export { HandlerData, HandlerType, Handler, BasicHandler, ErrorHandler }
