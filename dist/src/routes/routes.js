"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const science_routes_1 = __importDefault(require("./science/science.routes"));
const user_routes_1 = __importDefault(require("./users/user.routes"));
const router = (0, express_1.Router)();
exports.default = router
    .use([user_routes_1.default, science_routes_1.default]);
