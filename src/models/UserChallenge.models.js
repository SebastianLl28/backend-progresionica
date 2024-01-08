import { DataTypes } from 'sequelize'
import DB from '../config/db.js'

const UserChallenge = DB.define('UserChallenge', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  challengeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Challenge',
      key: 'id'
    }
  }
})

export default UserChallenge
