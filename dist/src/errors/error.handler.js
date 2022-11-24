"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler extends Error {
    constructor(message, status = 503) {
        super();
        this.message = message;
        this.status = status;
    }
}
exports.default = ErrorHandler;
