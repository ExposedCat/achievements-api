import { testInvalidData, testUnauthorized, testData } from '../utils/index.js'

function testLoginEndpoints(server, database, chai, Faker) {
	describe('POST /api/users/login', () => {
		beforeEach(async () => {
			await database.User.deleteMany({})
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if email is invalid',
			method: 'users/login',
			data: {}
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if password is empty',
			method: 'users/login',
			data: Faker.user({ password: false })
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if password is shorter then 5 characters',
			method: 'users/login',
			data: Faker.user({ password: 3 })
		})
		testUnauthorized(chai, server, {
			title: 'Should respond with error if email or password is wrong',
			method: 'users/login',
			beforeTest: async () => {
				const userData = Faker.user()
				await database.User.createNew(userData.email, userData.password)
				let wrongUserData = userData
				wrongUserData.password += Faker.string()
				return { data: wrongUserData }
			},
			data: null
		})
		testData(chai, server, {
			title: 'Should respond with login token if email and password are valid',
			method: 'users/login',
			beforeTest: async () => {
				const userData = Faker.user()
				await database.User.createNew(userData.email, userData.password)
				return { data: userData }
			},
			test: res => {
				chai.expect(res.status).to.equal(200)
				chai.expect(res.body?.data?.loginToken).to.be.a('string')
			},
			data: null
		})
	})
}

export { testLoginEndpoints }
