import { User } from '../models/index.js'

export const createUser = async user => await User.create(user)

export const getUserByEmail = async email => {
  try {
    if (!email) {
      throw new Error('Email es requerido')
    }
    const user = await User.findOne({ where: { email } })
    if (!user) return null
    return user
  } catch (error) {
    console.log(error)
  }
}

export const findUserById = async id => await User.findByPk(id)
