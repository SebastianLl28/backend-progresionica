import { Router } from 'express'
import { getMyProfile } from '../controller/user.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'
const router = Router()

router.get('/', verifyTotken, getMyProfile)

export default router
