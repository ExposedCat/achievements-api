import { Database, JwtUserData } from './index.js'

interface Locals {
	database: Database
}

declare module 'express' {
	export interface Response {
		locals: Locals
	}
	export interface Request {
		authorization: JwtUserData
	}
}
