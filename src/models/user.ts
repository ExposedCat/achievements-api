import {
	getUserById,
	getUserByEmail,
	createUser,
	userExists,
	correctCredentials,
	loginUser,
	registerUser
} from '../database-services/index.js'
import typegoose from '@typegoose/typegoose'
const { getModelForClass, prop } = typegoose

class ModelDefinition {
	@prop({ unique: true, required: true })
	email: string

	@prop({ required: true })
	password: string

	static createNew = createUser
	static checkExists = userExists
	static correctCredentials = correctCredentials
	static getById = getUserById
	static getByEmail = getUserByEmail
	static login = loginUser
	static register = registerUser
}

const Model = getModelForClass(ModelDefinition)

export { Model, ModelDefinition }
