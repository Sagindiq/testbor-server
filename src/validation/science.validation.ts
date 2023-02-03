import Joi from "joi";

export const scienceFilter = Joi.object().keys({
    science_name: Joi.string().required()
})