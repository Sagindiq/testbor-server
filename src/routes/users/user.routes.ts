import { Router } from "express";
import users from "../../controllers/users";

const userRouter = Router()

export default userRouter
    .get('/users', users.GET)
    .post('/addUser', users.POST)