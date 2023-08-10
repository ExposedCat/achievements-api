import type { Request, Response, NextFunction } from 'express'
import express from 'express'
import type { Database } from './database.js'

export type Endpoint = (req: Request, res: Response, next: NextFunction) => void

export async function runServer(
	port: number,
	database: Database
): Promise<void> {
	const app = express()

	app.use((req, res, next) => {
		res.ctx.database = database
		return next()
	})

	return new Promise(resolve => app.listen(port, resolve))
}
