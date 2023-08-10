import { MongoClient } from 'mongodb'
import type { ObjectId, Collection } from 'mongodb'

export type WithoutId<B> = Omit<B, '_id'>

export type Achievement = {
	_id: ObjectId
	name: string
	description: string
}

export type User = {
	_id: ObjectId
	userId: string
	achievements: ObjectId[]
}

export type Database = {
	achievements: Collection<Achievement>
	users: Collection<User>
}

export async function connectToDb() {
	const client = new MongoClient(process.env.DB_CONNECTION_STRING)
	await client.connect()
	const mongoDb = client.db()
	const achievements = mongoDb.collection<Achievement>('achievements')
	const users = mongoDb.collection<User>('users')
	const database: Database = { achievements, users }
	return database
}
