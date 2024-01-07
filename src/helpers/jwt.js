import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const generateToken = (user) => jwt.sign(user, process.env.JWT_SECRET_TOKEN, { expiresIn: '8h' })

export const verifyTokenSecretKey = (token) => jwt.verify(token, process.env.JWT_SECRET_TOKEN)
