import { hashPassword } from '../helpers/bcrypt.js'
import { findChallengesActiveSolvedByUser } from '../services/challenge.service.js'
import { countRoutineStateTrue } from '../services/routine.services.js'
import { updateUserById } from '../services/user.services.js'

export const getMyProfile = async (req, res) => {
  try {
    const user = req.user
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getProgress = async (req, res) => {
  try {
    const { id } = req.user
    const progress = await countRoutineStateTrue(id)
    const challenge = (await findChallengesActiveSolvedByUser(id)).length
    res.status(200).json({ progress, challenge })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const putUser = async (req, res) => {
  try {
    // change credential, but password is hash
    const { id } = req.user
    const { password } = req.body
    await updateUserById(id, req.body)
    if (password) {
      req.user.password = await hashPassword(password)
      await req.user.save()
    }
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
