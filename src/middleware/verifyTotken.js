import { verifyTokenSecretKey } from '../helpers/jwt.js'
import { findUserById } from '../services/user.services.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const verifyTotken = async (req, res, next) => {
  try {
    const findToken = req.headers.token
    if (!findToken) return res.status(401).json({ message: 'Unauthorized' })
    const payload = verifyTokenSecretKey(findToken)
    if (!payload) return res.status(401).json({ message: 'Unauthorized' })
    const findUser = await findUserById(payload.id)
    if (!findUser) return res.status(401).json({ message: 'Unauthorized' })
    req.user = findUser
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
