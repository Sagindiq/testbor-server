"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model");
const error_handler_1 = __importDefault(require("../errors/error.handler"));
const users_validation_1 = require("../validation/users.validation");
exports.default = {
    GET: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const allUsers = yield model_1.UserModel.find().catch(err => next(new error_handler_1.default(err.message)));
        return res.json(allUsers);
    }),
    POST: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { error, value } = users_validation_1.userPostFilter.validate(req.body);
        if (error)
            return next(new error_handler_1.default(error.message, 400));
        const { name, email, username, password, address, gender } = value;
        const newUser = yield model_1.UserModel.create({ name, email, username, password, address, gender }).catch(err => next(new error_handler_1.default(err.message)));
        if (newUser)
            return res.json(newUser);
    })
};
