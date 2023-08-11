import type { Database, User } from '../config/database.js'

async function getOrCreate(args: {
	db: Database
	userId: string
}): Promise<User | null> {
	const { db, userId } = args
	try {
		const result = await db.users.findOneAndUpdate(
			{ userId },
			{
				$set: {
					userId,
					achievements: []
				}
			},
			{
				upsert: true,
				returnDocument: 'after'
			}
		)
		return result.value
	} catch (error) {
		console.error('[User service] Get or create user failed', { error })
		return null
	}
}

export const userService = {
	getOrCreate
}
