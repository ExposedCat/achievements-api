import 'express'
import type { Database } from './config/database.js'

export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: number
			DB_CONNECTION_STRING: string
		}
	}

	namespace Express {
		interface Response {
			ctx: {
				database: Database
			}
		}
	}
}
