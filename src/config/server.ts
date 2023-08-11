import type { Request, Response, NextFunction } from 'express'
import express from 'express'
import type { Database } from './database.js'
import { handler as getOrCreateUserEndpoint } from '../controllers/get-or-create-user.js'

export type Endpoint = (req: Request, res: Response, next: NextFunction) => void

export async function runServer(
	port: number,
	database: Database
): Promise<void> {
	const app = express()

	app.use((req, res, next) => {
		res.ctx = { database }
		return next()
	})

	app.get('/user/:userId', getOrCreateUserEndpoint)

	return new Promise(resolve => app.listen(port, resolve))
}
