import { Router } from 'express'
import { getMyProfile, getProgress } from '../controller/user.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'
const router = Router()

router.get('/', verifyTotken, getMyProfile)
router.get('/progress', verifyTotken, getProgress)

export default router
