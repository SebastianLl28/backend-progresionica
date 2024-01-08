import { Challenge, UserChallenge } from '../models/index.js'

export const findAllChallenges = async (query) => Challenge.findAll(query)

export const findChallengesActiveSolvedByUser = async (userId) => {
  const results = await UserChallenge.findAll({
    where: { userId },
    attributes: ['challengeId']
  })
  const idsChallengeIds = results.map((result) => result.challengeId)
  console.log(idsChallengeIds)

  return idsChallengeIds
}

export const addUserChallenge = async (userId, challengeId) => await UserChallenge.create({ userId, challengeId })

export const findChallengeById = async (id) => await Challenge.findByPk(id)
