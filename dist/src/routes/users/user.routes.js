"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("../../controllers/users"));
const userRouter = (0, express_1.Router)();
exports.default = userRouter
    .get('/users', users_1.default.GET)
    .post('/addUser', users_1.default.POST);
