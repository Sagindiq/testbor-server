"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const heiSchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Types.ObjectId
    },
    hei_name: {
        type: String,
        required: true
    },
    short_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    faculties: [
        {
            ref: 'faculties',
            type: mongoose_1.default.Types.ObjectId
        }
    ]
}, {
    collection: 'heis'
});
const HeiModel = mongoose_1.default.model('heis', heiSchema);
exports.default = HeiModel;
