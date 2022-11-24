"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandle = (err, req, res, next) => {
    return res.status(err.status).json({
        message: err.message,
        status: err.status
    });
};
exports.default = errorHandle;
