import Challenge from './Challenge.models.js'
import Phrases from './Phrases.models.js'
import User from './User.models.js'
import Routine from './Routine.model.js'

User.hasMany(Routine, { foreignKey: 'userId' })
Routine.belongsTo(User, { foreignKey: 'userId' })

export { Phrases, User, Routine, Challenge }
