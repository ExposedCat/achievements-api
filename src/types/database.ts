import { User as UserModelObject, UserDefinition } from '../models/index.js'
import { DocumentType } from '@typegoose/typegoose'

type UserModel = typeof UserModelObject

type User = DocumentType<UserDefinition> | null

export { User, UserModel }
