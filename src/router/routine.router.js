import { Router } from 'express'
import { verifyTotken } from '../middleware/verifyTotken.js'
import { deleteRoutine, getAllRoutineByUser, postRoutineByUser, putRoutine } from '../controller/routine.controller.js'

const router = Router()

router.get('/', verifyTotken, getAllRoutineByUser)
router.post('/', verifyTotken, postRoutineByUser)
router.put('/:id', verifyTotken, putRoutine)
router.delete('/:id', verifyTotken, deleteRoutine)

export default router
