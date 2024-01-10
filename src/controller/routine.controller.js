import {
  createRoutine,
  deleteRoutineById,
  editRoutine,
  findRoutineByUserId
} from '../services/routine.services.js'

export const getAllRoutineByUser = async (req, res) => {
  try {
    const { id } = req.user
    const listRoutins = await findRoutineByUserId(id)
    res.status(200).json(listRoutins)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const postRoutineByUser = async (req, res) => {
  try {
    const { id } = req.user
    const { name, description, time } = req.body
    const routine = {
      name,
      description,
      userId: id,
      time
    }
    await createRoutine(routine)
    res.status(200).json({ message: 'rutina creada' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const putRoutine = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, state, time } = req.body
    const routine = {
      name,
      description,
      state: state ?? false,
      time
    }
    await editRoutine(routine, id)
    res.status(200).json({ message: 'rutina editada correctamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteRoutine = async (req, res) => {
  try {
    const { id } = req.params
    await deleteRoutineById(id)
    res.status(200).json({ message: 'rutina eliminada correctamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
