import { Request, Response, NextFunction } from "express";
import { FacultyModel } from "../model";
import ErrorHandler from "../errors/error.handler";
import { ScienceCoupleModel } from "../model";

export default {
    GET: async(req: Request, res: Response, next: NextFunction) => {
        const { first_science, second_science } = req.headers

        if (first_science && second_science) {
            const findCouple = await ScienceCoupleModel.findOne({ first_science, second_science })

            if(findCouple) {
                const findFaculties = await FacultyModel.find({exam_sciences: findCouple._id}).populate({
                    path: 'hei',
                    select: ['hei_name', 'short_name'],
                    strictPopulate: false
                })

                findFaculties ? res.json(findFaculties) : next(new ErrorHandler('Faculties not found', 404))
                return
            } else {
                return next(new ErrorHandler('Science Couple not found', 404))
            }

        } else {
            return next(new ErrorHandler(`first science or second science not provided`))
        }


    }
}