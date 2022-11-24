"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sciences_1 = __importDefault(require("../../controllers/sciences"));
const scienceRouter = (0, express_1.Router)();
exports.default = scienceRouter
    .get('/sciences', sciences_1.default.GET);
