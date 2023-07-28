import type { Express } from 'express'
import express from 'express'
import type { HelmetOptions } from 'helmet'
import helmet from 'helmet'
import session from 'express-session'

function setMiddlewares(app: Express, sessionSecret: string) {
	// Security headers
	const helmetOptions = {
		referrerPolicy: 'strict-origin-when-cross-origin'
	} as HelmetOptions
	app.use(helmet(helmetOptions))

	// Express session
	app.use(
		session({
			secret: sessionSecret,
			resave: true,
			saveUninitialized: true
		})
	)

	// Express config
	app.use(express.json())
	app.use(
		express.urlencoded({
			extended: true
		})
	)
}

export { setMiddlewares }
