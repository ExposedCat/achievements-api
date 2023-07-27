function validateEnv() {
	const requiredEnvs = [
		'DB_CONNECTION_STRING',
		'JWT_SECRET',
		'SESSION_SECRET',
		'PORT'
	]
	for (const env of requiredEnvs) {
		if (env in process.env) {
			continue
		}
		console.error(`Error: Environment variable "${env}" is not defined`)
		process.exit()
	}
}

export { validateEnv }
