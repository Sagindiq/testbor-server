import { Router } from "express";
import sciences from "../../controllers/sciences";

const scienceRouter = Router()

export default scienceRouter
    .get('/sciences', sciences.GET)