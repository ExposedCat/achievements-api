import chai from 'chai'
import chaiHttp from 'chai-http'

import { initApp } from '../build/config/index.js'
import { User } from '../build/models/index.js'
import { initFakeDataFactory } from './utils/index.js'

import {
	testRootEndpoint,
	testRegisterEndpoints,
	testLoginEndpoints
} from './api/index.js'

process.env.NODE_ENV = 'test'
chai.use(chaiHttp)

const server = await initApp()
const FakeDataFactory = initFakeDataFactory()

const database = { User }

testRootEndpoint(server, chai)
testRegisterEndpoints(server, database, chai, FakeDataFactory)
testLoginEndpoints(server, database, chai, FakeDataFactory)
