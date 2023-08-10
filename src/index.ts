import { connectToDb } from './config/database.js'
import { configureEnvironment } from './config/environment.js'
import { runServer } from './config/server.js'

console.debug('Starting app...')

console.debug('Configurating environment...')
configureEnvironment()

console.debug('Connecting to database...')
const database = await connectToDb()

console.debug('Running server...')
await runServer(process.env.PORT, database)

console.debug('App started')
