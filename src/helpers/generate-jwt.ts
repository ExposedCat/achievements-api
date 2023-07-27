import { sign } from 'async-jsonwebtoken'
import { JwtUserData } from '../types/index.js'

interface ValidJWT {
	error: false
	token: string
}

interface InvalidJWT {
	error: true
	token: null
}

type JWT = ValidJWT | InvalidJWT

// TODO: Move default value to ENV
async function generateJwt(data: JwtUserData, expiresIn = '15m'): Promise<JWT> {
	const options = { expiresIn }
	const [token, error] = await sign(
		data,
		process.env.JWT_SECRET as string,
		options
	)
	if (error || token == null) {
		return {
			error: true,
			token: null
		}
	}
	return {
		error: false,
		token: token
	}
}

export { generateJwt }
