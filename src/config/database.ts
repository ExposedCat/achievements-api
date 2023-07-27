import mongoose, { ConnectOptions } from 'mongoose'

async function connect(connectionString: string) {
	const connectionOptions = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	try {
		await mongoose.connect(
			connectionString,
			connectionOptions as ConnectOptions
		)
	} catch (error) {
		console.error('[Database] Can not connect:')
		console.trace(error)
		process.exit(2)
	}
}

function initDatabase(connectionString: string) {
	mongoose.Promise = global.Promise
	const connector = connect.bind(null, connectionString)
	return connector
}

export { initDatabase }
