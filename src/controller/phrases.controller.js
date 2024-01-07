import { findPhraseRandom } from '../services/phrases.services.js'

export const getPhraseRandom = async (req, res) => {
  try {
    const phrase = await findPhraseRandom()
    res.status(200).json({ message: phrase.phrase })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
