import dotenv from 'dotenv'
dotenv.config()
import express, { Application } from 'express'
import errorHandle from './middlewares/error.middleware'
import router from './routes/routes'
import mongo from './utils/mongoose'
const app: Application = express()

app.use(express.json())

app.use(router)

app.use(errorHandle)

mongo().then(() => console.log('Connected')).catch(err => console.log(err.message))

const PORT: string | number = process.env.PORT

app.listen(PORT, () => {
    console.log(PORT)
})