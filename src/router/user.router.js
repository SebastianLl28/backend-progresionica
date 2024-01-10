import { Router } from 'express'
import { getMyProfile, getProgress, putUser } from '../controller/user.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'
const router = Router()

router.get('/', verifyTotken, getMyProfile)
router.get('/progress', verifyTotken, getProgress)
router.put('/', verifyTotken, putUser)

export default router
