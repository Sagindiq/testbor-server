import { Router, RouterOptions } from "express";
import userRoutes from "./users/user.routes";

const router: Router = Router()

export default router
    .use([ userRoutes ])

