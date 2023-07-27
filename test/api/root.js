function testRootEndpoint(server, chai) {
	describe('GET /api', () => {
		it('Should respond with status code 200', () => {
			return chai
				.request(server)
				.get('/api')
				.then(res => {
					chai.expect(res.status).to.equal(200)
				})
		})
	})
}

export { testRootEndpoint }
