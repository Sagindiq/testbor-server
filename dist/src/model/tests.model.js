"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const testSchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Types.ObjectId
    },
    question: {
        type: String,
        required: true
    },
    options: [
        {
            ref: 'options',
            type: mongoose_1.default.Types.ObjectId
        }
    ],
    answer: {
        type: Number,
        required: true
    },
    science_id: {
        ref: 'sciences',
        type: mongoose_1.default.Types.ObjectId
    }
}, {
    collection: 'tests'
});
const TestModel = mongoose_1.default.model('tests', testSchema);
exports.default = TestModel;
