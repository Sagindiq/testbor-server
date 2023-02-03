import Joi from 'joi'

export const testFilter = Joi.object().keys({
    question: Joi.string().required(),
    options: Joi.array().items(Joi.string()).length(4).required(),
    answer: Joi.string().required(),
    science_id: Joi.string().required()
})