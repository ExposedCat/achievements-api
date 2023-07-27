import { testInvalidData, testData } from '../utils/index.js'

function testRegisterEndpoints(server, database, chai, Faker) {
	describe('POST /api/users/register', () => {
		beforeEach(async () => {
			await database.User.deleteMany({})
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if email is empty',
			method: 'users/register',
			data: {}
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if email is invalid',
			method: 'users/register',
			data: {
				email: Faker.email().replace('@', 'x')
			}
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if password is empty',
			method: 'users/register',
			data: Faker.user({ password: false })
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if password is shorter then 5 characters',
			method: 'users/register',
			data: Faker.user({ password: 3 })
		})
		testInvalidData(chai, server, {
			title: 'Should respond with error if email is alredy in use',
			method: 'users/register',
			data: Faker.user(),
			beforeTest: userData =>
				database.User.createNew(userData.email, userData.password)
		})
		testData(chai, server, {
			title: 'Should respond with success if email and password are valid',
			method: 'users/register',
			data: Faker.user(),
			test: res =>
				chai.expect(res.body?.message).to.contain('successfull')
		})
		testData(chai, server, {
			title: 'Should respond with login token if email and password are valid',
			method: 'users/register',
			data: Faker.user(),
			test: res =>
				chai.expect(res.body?.data?.loginToken).to.be.a('string')
		})
	})
}

export { testRegisterEndpoints }
