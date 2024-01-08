import { addUserChallenge, findAllChallenges, findChallengeById, findChallengesActiveSolvedByUser } from '../services/challenge.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getChallengeActive = async (req, res) => {
  try {
    const challenges = await findAllChallenges({ where: { status: true }, attributes: ['id', 'name', 'description', 'reward'] })
    res.status(200).json(challenges)
  } catch (error) {
    res.status(500).json({ message: error })
    console.log(error)
  }
}

export const getChallengeResolveByUser = async (req, res) => {
  try {
    const { id } = req.user
    const results = await findChallengesActiveSolvedByUser(id)
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const postChallengeResolve = async (req, res) => {
  try {
    const user = req.user
    const { challengeId } = req.body
    await addUserChallenge(user.id, challengeId)
    const { reward } = await findChallengeById(challengeId)
    user.gems += reward
    await user.save()
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
