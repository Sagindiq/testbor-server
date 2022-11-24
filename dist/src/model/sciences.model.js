"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const scienceSchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Types.ObjectId
    },
    science_name: {
        type: String,
        required: true
    }
}, {
    collection: 'sciences'
});
const ScienceModel = mongoose_1.default.model('sciences', scienceSchema);
exports.default = ScienceModel;
