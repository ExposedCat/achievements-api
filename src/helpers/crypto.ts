import bcrypt from 'bcrypt'

async function encrypt(data: string) {
	const salt = await bcrypt.genSalt(10)
	const encrypted = await bcrypt.hash(data, salt)
	return encrypted
}

async function compare(data: string, encrypeted: string) {
	const equal = await bcrypt.compare(data, encrypeted)
	return equal
}

export { encrypt, compare }
