"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const facultySchema = new mongoose_1.default.Schema({
    id: {
        type: mongoose_1.default.Types.ObjectId
    },
    faculty_name: {
        type: String,
        requried: true
    },
    contract_score: {
        type: Number,
        required: true
    },
    grant_score: {
        type: Number,
        required: true
    },
    contract_limit: {
        type: Number,
        required: true
    },
    grant_limit: {
        type: Number,
        requried: true
    },
    exam_science: {
        ref: 'science_couples',
        type: mongoose_1.default.Types.ObjectId
    },
    heid_id: {
        ref: 'heis',
        type: mongoose_1.default.Types.ObjectId
    }
}, {
    collection: 'faculties'
});
const FacultyModel = mongoose_1.default.model('faculties', facultySchema);
exports.default = FacultyModel;
