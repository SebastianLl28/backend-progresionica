import express from 'express'
import morgan from 'morgan'
import { authRouter, phrasesRouter, userRouter, routineRouter, challengeRouter } from './router/index.js'
import cors from 'cors'

const app = express()

// config json
app.use(express.json())

// config cors
app.use(cors())

app.use(morgan('dev'))

app.use('/auth', authRouter)
app.use('/phrase', phrasesRouter)
app.use('/user', userRouter)
app.use('/routine', routineRouter)
app.use('/challenge', challengeRouter)

export default app
