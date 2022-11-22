import mongoose, { Schema } from "mongoose";

const scienceCouplesSchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    first_science: {
        type: String
    },
    second_science: {
        type: String
    }
})