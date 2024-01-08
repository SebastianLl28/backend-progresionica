import Challenge from './Challenge.models.js'
import Phrases from './Phrases.models.js'
import User from './User.models.js'
import Routine from './Routine.model.js'
import UserChallenge from './UserChallenge.models.js'

User.hasMany(Routine, { foreignKey: 'userId' })
Routine.belongsTo(User, { foreignKey: 'userId' })

User.belongsToMany(Challenge, { through: UserChallenge })
Challenge.belongsToMany(User, { through: UserChallenge })

export { Phrases, User, Routine, Challenge, UserChallenge }
