import { JwtUserData, ResponseName, ResultType } from '../types/index.js'
import { Request, Response, NextFunction } from 'express'
import { verify } from 'async-jsonwebtoken'
import { respond } from '../services/index.js'

async function validateJWT(req: Request, res: Response, next: NextFunction) {
	const [data, error] = await verify(
		req.headers.authorization as string,
		process.env.JWT_SECRET as string
	)
	if (error) {
		respond(res, ResultType.Error, ResponseName.Unauthorized)
	} else {
		req.authorization = data as JwtUserData
		next()
	}
}

export { validateJWT }
