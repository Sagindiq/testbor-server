import { Router } from 'express'
import tests from '../../controllers/tests'
const testRouter = Router()

export default testRouter
    .get('/tests', tests.GET)
    .post('/add-test', tests.POST)
