import type { UserModel } from '../types/index.js'

async function userExists(this: UserModel, email: string, password?: string) {
	const searchQuery: {
		email: string
		password?: string
	} = { email }
	if (password !== undefined) {
		searchQuery.password = password
	}
	const count = await this.countDocuments(searchQuery)
	return count !== 0
}

export { userExists }
