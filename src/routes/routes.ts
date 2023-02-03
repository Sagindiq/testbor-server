import { Router } from "express";
import scienceRoutes from "./science/science.routes";
import userRoutes from "./users/user.routes";
import facultyRouter from './faculty/faculty.routes'
import testRoutes from "./test/test.routes";

const router = Router()

export default router
    .use([userRoutes, scienceRoutes, facultyRouter, testRoutes ])

