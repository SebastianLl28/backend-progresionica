import { Router } from 'express'
import { postCreateUser, postLogin, getVerifyToken } from '../controller/auth.controller.js  '
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.post('/', postCreateUser)

router.post('/login', postLogin)

router.get('/verify', verifyTotken, getVerifyToken)

export default router
