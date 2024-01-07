import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Phrases = db.define(
  'phrases', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    phrase: DataTypes.STRING
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

export default Phrases
