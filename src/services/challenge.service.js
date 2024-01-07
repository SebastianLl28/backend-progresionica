import { Challenge } from '../models/index.js'

export const findAllChallenges = async (query) => Challenge.findAll(query)
