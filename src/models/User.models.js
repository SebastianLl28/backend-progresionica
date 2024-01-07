import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex: {
      type: DataTypes.ENUM('m', 'f'),
      allowNull: false,
      validate: {
        isIn: [['m', 'f']] // Masculino, Femenino,
      }
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://cdn-icons-png.flaticon.com/512/666/666201.png'
    },
    // Días de racha
    daysOfSplit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    heart: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      validate: {
        min: 0
      }
    },
    gems: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    }
  },
  {
    freezeTableName: true,
    createdAt: true,
    updatedAt: false
  }
)

export default User
