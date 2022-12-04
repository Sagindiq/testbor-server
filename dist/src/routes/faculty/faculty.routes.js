"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faculties_1 = __importDefault(require("../../controllers/faculties"));
const facultyRouter = (0, express_1.Router)();
exports.default = facultyRouter
    .get('/faculties', faculties_1.default.GET);
