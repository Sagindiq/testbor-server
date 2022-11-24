import { Request, Response, NextFunction } from "express";
import { UserModel } from "../model";
import ErrorHandler from "../errors/error.handler";
import { userPostFilter } from "../validation/users.validation";

export default {
    GET: async(req: Request, res: Response, next: NextFunction) => {
        const allUsers = await UserModel.find().catch(err => next(new ErrorHandler(err.message)))

        return res.json(allUsers)
    },
    POST: async(req: Request, res: Response, next: NextFunction) => {
        const { error, value } = userPostFilter.validate(req.body)

        if(error) return next(new ErrorHandler(error.message, 400))
        
        
        const { name, email, username, password, address, gender } = value

        const newUser = await UserModel.create({ name, email, username, password, address, gender }).catch(err => next(new ErrorHandler(err.message)))

        if(newUser) return res.json(newUser)
    }
}
