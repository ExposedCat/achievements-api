import type { Endpoint } from '../config/server.js'
import { userService } from '../services/user.js'

export const handler: Endpoint = async (req, res) => {
	const { userId } = req.params
	if (!userId) {
		return res.status(400).json({ error: 'userId not specified' })
	}
	try {
		const user = await userService.getOrCreate({
			db: res.ctx.database,
			userId: userId.toString()
		})
		if (user === null) {
			throw new Error('Unable to create user')
		}
		return res.status(200).json({ error: null, user })
	} catch (error) {
		console.error('[Controller] Get or create user failed', { error })
		return res
			.status(500)
			.json({ error: (error as Error).message ?? 'Unknown' })
	}
}
