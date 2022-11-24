import mongoose, { Schema } from "mongoose";

const facultySchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
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
        type: mongoose.Types.ObjectId
    },
    heid_id: {
        ref: 'heis',
        type: mongoose.Types.ObjectId
    }
}, {
    collection: 'faculties'
})

const FacultyModel = mongoose.model('faculties', facultySchema);
export default FacultyModel;