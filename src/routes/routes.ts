import { Router } from "express";
import scienceRoutes from "./science/science.routes";
import userRoutes from "./users/user.routes";

const router = Router()

export default router
    .use([ userRoutes, scienceRoutes ])

