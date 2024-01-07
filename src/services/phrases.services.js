import { Phrases } from '../models/index.js'
import { literal } from 'sequelize'

export const findPhraseRandom = () => Phrases.findOne({ order: literal('RAND()') })
