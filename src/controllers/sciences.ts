import { Request, Response, NextFunction } from 'express'
import { ScienceModel } from '../model'
import ErrorHandler from '../errors/error.handler'
import { scienceFilter } from '../validation/science.validation'

export default {
    GET: async(_: Request, res: Response, next: NextFunction) => {
        const allScience = await ScienceModel.find().catch(err => next(new ErrorHandler(err.message)))

        return res.json(allScience)
    },
    POST: async(req: Request, res: Response, next: NextFunction) => {
        const { error, value } = scienceFilter.validate(req.body)
        
        if(error) return next(new ErrorHandler(error.message))
        const { science_name } = value
        const result = ScienceModel.create({ science_name }).catch(err => next(new ErrorHandler(err.message)))

        return res.json(result)
    }
}