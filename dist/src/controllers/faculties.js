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
const model_2 = require("../model");
exports.default = {
    GET: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { first_science, second_science } = req.headers;
        if (first_science && second_science) {
            const findCouple = yield model_2.ScienceCoupleModel.findOne({ first_science, second_science });
            if (findCouple) {
                const findFaculties = yield model_1.FacultyModel.find({ exam_sciences: findCouple._id }).populate({
                    path: 'hei',
                    select: ['hei_name', 'short_name'],
                    strictPopulate: false
                });
                findFaculties ? res.json(findFaculties) : next(new error_handler_1.default('Faculties not found', 404));
                return;
            }
            else {
                return next(new error_handler_1.default('Science Couple not found', 404));
            }
        }
        else {
            return next(new error_handler_1.default(`first science or second science not provided`));
        }
    })
};
