import type {
	User as UserModelObject,
	UserDefinition
} from '../models/index.js'
import type { DocumentType } from '@typegoose/typegoose'

type UserModel = typeof UserModelObject

type User = DocumentType<UserDefinition> | null

export { User, UserModel }
