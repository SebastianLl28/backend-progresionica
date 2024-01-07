import { Router } from 'express'
import { getChallengeActive } from '../controller/challenge.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.get('/active', verifyTotken, getChallengeActive)

export default router
