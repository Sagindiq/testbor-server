import mongoose, { Schema } from "mongoose";

const testSchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    question: {
        type: String,
        required: true
    },
    options: [
        {
            ref: 'options',
            type: mongoose.Types.ObjectId
        }
    ],
    answer: {
        type: Number,
        required: true
    },
    science_id: {
        ref: 'sciences',
        type: mongoose.Types.ObjectId
    }
}, {
    collection: 'tests'
})

const TestModel = mongoose.model('tests', testSchema);
export default TestModel;