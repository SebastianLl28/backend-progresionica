import { findChallengesActiveSolvedByUser } from '../services/challenge.service.js'
import { countRoutineStateTrue } from '../services/routine.services.js'

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
