import Chance from 'chance'
import { generateJwt } from '../../build/helpers/index.js'

function user(chance, password, options = {}) {
	let userData = {}
	if (options.email !== false) {
		userData.email = chance.email()
	}
	if (options.password !== false) {
		userData.password = password(options.password || 5)
	}
	return userData
}

function initFakeDataFactory() {
	const chance = new Chance()
	const email = () => chance.email()
	const password = length => chance.string({ length })
	const string = () => chance.string()
	const number = () => chance.integer()
	const jwt = userId => generateJwt({ data: { userId } })
	return {
		email,
		password,
		string,
		number,
		jwt,
		user: user.bind(null, chance, password)
	}
}

export { initFakeDataFactory }
