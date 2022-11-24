import { Request, Response, NextFunction } from 'express'
import { ScienceModel } from '../model'
import ErrorHandler from '../errors/error.handler'

export default {
    GET: async(req: Request, res: Response, next: NextFunction) => {
        const allScience = await ScienceModel.find().catch(err => next(new ErrorHandler(err.message)))

        return res.json(allScience)
    }
}