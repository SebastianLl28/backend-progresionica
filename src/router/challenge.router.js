import { Router } from 'express'
import { getChallengeActive, getChallengeResolveByUser, postChallengeResolve } from '../controller/challenge.controller.js'
import { verifyTotken } from '../middleware/verifyTotken.js'

const router = Router()

router.get('/active', verifyTotken, getChallengeActive)
router.get('/resolve', verifyTotken, getChallengeResolveByUser)
router.post('/resolve', verifyTotken, postChallengeResolve)

export default router
