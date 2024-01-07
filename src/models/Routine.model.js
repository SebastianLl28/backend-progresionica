import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Routine = db.define(
  'routine', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

export default Routine
