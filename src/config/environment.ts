import { config } from 'dotenv'

export function configureEnvironment() {
	config()
	for (const env of ['PORT', 'DB_CONNECTION_STRING']) {
		if (process.env[env] === undefined) {
			throw new Error(`"${env}" is not specified`)
		}
	}

	process.env.PORT = Number(process.env.PORT)
}
