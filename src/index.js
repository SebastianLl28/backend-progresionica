import app from './app.js'
import 'dotenv/config.js'
import DB from './config/db.js'

const connectDB = async () => {
  try {
    await DB.authenticate()
    await DB.sync()
    console.log('Database connected...')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
