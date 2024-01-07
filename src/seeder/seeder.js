import { exit } from 'node:process'
import db from '../config/db.js'
import { Challenge } from '../models/index.js'
import { challengeList } from './index.js'

const importData = async () => {
  try {
    await db.authenticate()
    await db.sync()
    await Promise.all([
      Challenge.destroy({ where: {} })
    ])
    await Promise.all([
      Challenge.bulkCreate(challengeList)])
    console.log('Datos importados correctamente')
    exit()
  } catch (error) {
    console.log(error)
    exit(1)
  }
}

importData()
