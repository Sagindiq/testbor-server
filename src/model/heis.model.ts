import mongoose, { Schema } from "mongoose";

const heiSchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
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
            type: mongoose.Types.ObjectId
        }
    ]
}, {
    collection: 'heis'
});

const HeiModel = mongoose.model('heis', heiSchema)
export default HeiModel;