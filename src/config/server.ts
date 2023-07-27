import express from 'express'

import { setMiddlewares } from '../middlewares/set.js'
import { setHandlers } from '../controllers/set.js'

function initServer(sessionSecret: string) {
	const app = express()

	setMiddlewares(app, sessionSecret)
	setHandlers(app)

	return {
		server: app,
		runServer: (port: number) => app.listen(port)
	}
}

export { initServer }
