import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../errors/error.handler";
import { TestModel } from "../model";
import { testFilter } from "../validation/test.validation";
import shuffler from "../utils/shuffler";

export default  {
    GET: async(req: Request, res: Response, next: NextFunction) => {
        const { science_id } = req.headers

        if(!science_id) return next(new ErrorHandler('Science id is required', 400))

        const tests: any = await TestModel.find().where({science_id}).limit(30).catch(err => next(new ErrorHandler(err, 500)))

        if(tests.length == 0) return next(new ErrorHandler('Tests not found', 404))

        const randomTest = shuffler(tests)
        randomTest.map(test => {
            return test.options = shuffler(test.options)
        })
        
        return res.json(randomTest)
    },
    POST: async(req: Request, res: Response, next: NextFunction) => {
        const { error, value } = testFilter.validate(req.body)
        if(error) return next(new ErrorHandler(error.message, 400))
        const test = await TestModel.create(value).catch(err => next(new ErrorHandler(err, 500)))
        return res.json(test)
    }
}