import { comparePassword, hashPassword } from '../helpers/bcrypt.js'
import { generateToken } from '../helpers/jwt.js'
import { createUser, getUserByEmail } from '../services/user.services.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const postCreateUser = async (req, res) => {
  try {
    const { name, lastName, email, password, birthDate, sex } = req.body

    const user = await getUserByEmail(email)

    if (user) {
      return res.status(400).json({ message: 'El Correo ya está en uso' })
    }
    const newPassword = await hashPassword(password)

    await createUser({
      name,
      lastName,
      email,
      password: newPassword,
      birthDate,
      sex
    })
    res.status(201).json({ message: 'User created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al crear el usuario' })
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await getUserByEmail(email)
    if (!user) {
      return res.status(404).json({ message: 'Correo o contraseña incorrecta' })
    }

    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) {
      return res.status(404).json({ message: 'Correo o contraseña incorrecta' })
    }

    const obj = {
      id: user.id,
      name: user.name
    }

    const token = generateToken(obj)

    res.status(200).json({ message: 'Login successful', token })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' })
  }
}

export const getVerifyToken = async (req, res) => {
  try {
    res.status(200).json({ message: 'Token valido' })
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' })
  }
}
