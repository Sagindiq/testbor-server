import { Router } from "express";
import faculties from "../../controllers/faculties";

const facultyRouter = Router()

export default facultyRouter
    .get('/faculties', faculties.GET)