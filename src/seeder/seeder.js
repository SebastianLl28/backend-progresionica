import { exit } from 'node:process'
import db from '../config/db.js'
import { Challenge, Phrases } from '../models/index.js'
import { challengeList, phrasesList } from './index.js'

const importData = async () => {
  try {
    await db.authenticate()
    await db.sync()
    await Promise.all([
      Challenge.destroy({ where: {} }),
      Phrases.destroy({ where: {} })
    ])
    await Promise.all([
      Challenge.bulkCreate(challengeList),
      Phrases.bulkCreate(phrasesList)
    ])
    console.log('Datos importados correctamente')
    exit()
  } catch (error) {
    console.log(error)
    exit(1)
  }
}

importData()
