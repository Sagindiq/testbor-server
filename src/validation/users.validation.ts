import joi from 'joi'

const pattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/

export const userPostFilter = joi.object().keys({
    name: joi.string().required().min(3).message(`name must contain at least 3 letters`),
    email: joi.string().required().email().message(`Email is required`),
    username: joi.string().regex(pattern).message(`username mustn't be ._- symbols at the beginning and the end`),
    password: joi.string().required().min(8).message('must be at least 8 characters long'),
    address: joi.string().required(),
    gender: joi.string().required().valid('male', 'female', 'm', 'f')
})