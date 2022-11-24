"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const scienceCoupleSchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Types.ObjectId
    },
    first_science: {
        ref: 'sciences',
        type: mongoose_1.default.Types.ObjectId
    },
    second_science: {
        ref: 'sciences',
        type: mongoose_1.default.Types.ObjectId
    },
    faculties: [
        {
            ref: 'faculties',
            type: mongoose_1.default.Types.ObjectId
        }
    ]
}, {
    collection: 'science_couples'
});
const ScienceCoupleModel = mongoose_1.default.model('science_couples', scienceCoupleSchema);
exports.default = ScienceCoupleModel;
