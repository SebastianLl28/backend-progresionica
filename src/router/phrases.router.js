import { Router } from 'express'
import { getPhraseRandom } from '../controller/phrases.controller.js'

const router = Router()

router.get('/', getPhraseRandom)

export default router
