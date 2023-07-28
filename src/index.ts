import { initApp } from './config/index.js'

const { runServer, connectToDatabase } = await initApp()

await connectToDatabase()
runServer(Number(process.env.PORT))
