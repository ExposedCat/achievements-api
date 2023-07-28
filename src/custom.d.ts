import type { Database, JwtUserData } from './index.js'

interface Context {
	database: Database
}

declare module 'express' {
	export interface Response {
		ctx: Context
	}
	export interface Request {
		authorization: JwtUserData
	}
}
