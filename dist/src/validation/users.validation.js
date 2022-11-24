"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPostFilter = void 0;
const joi_1 = __importDefault(require("joi"));
const pattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
exports.userPostFilter = joi_1.default.object().keys({
    name: joi_1.default.string().required().min(3).message(`name must contain at least 3 letters`),
    email: joi_1.default.string().required().email().message(`Email is required`),
    username: joi_1.default.string().regex(pattern).message(`username mustn't be ._- symbols at the beginning and the end`),
    password: joi_1.default.string().required().min(8).message('must be at least 8 characters long'),
    address: joi_1.default.string().required(),
    gender: joi_1.default.string().required().valid('male', 'female', 'm', 'f')
});
