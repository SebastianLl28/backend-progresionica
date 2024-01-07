import { findAllChallenges } from '../services/challenge.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getChallengeActive = async (req, res) => {
  try {
    const challenges = await findAllChallenges({ where: { status: true }, attributes: ['id', 'name', 'description', 'reward'] })
    console.log('llego acá')
    res.status(200).json(challenges)
  } catch (error) {
    res.status(500).json({ message: error })
    console.log(error)
  }
}
