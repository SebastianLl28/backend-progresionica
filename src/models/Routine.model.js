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
    description: DataTypes.STRING,
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    }
  }, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  })

export default Routine
