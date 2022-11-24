import mongoose, { Schema } from "mongoose";

const scienceCoupleSchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    first_science: {
        ref: 'sciences',
        type: mongoose.Types.ObjectId
    },
    second_science: {
        ref: 'sciences',
        type: mongoose.Types.ObjectId
    },
    faculties: [
        {
            ref: 'faculties',
            type: mongoose.Types.ObjectId
        }
    ]
}, {
    collection: 'science_couples'
})

const ScienceCoupleModel = mongoose.model('science_couples', scienceCoupleSchema);

export default ScienceCoupleModel;