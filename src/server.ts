import dotenv from 'dotenv'
dotenv.config({path: './server.env'})
import express, { Application } from 'express'
import errorHandle from './middlewares/error.middleware'
import router from './routes/routes'
import mongo from './utils/mongoose'
import cors from 'cors'
const app: Application = express()
// const PORT: string | number = process.env.PORT
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use(router)

app.use(errorHandle)

mongo().then(() => console.log('Connected')).catch(err => console.log(err.message))


app.listen(PORT, () => {
    console.log(PORT)
})
