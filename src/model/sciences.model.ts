import mongoose, { ObjectId, Schema } from "mongoose";

export interface sciencesInterface extends Document {
    id: ObjectId,
    science_name: string
}

const scienceSchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    science_name: {
        type: String,
        required: true
    }
}, {
    collection: 'sciences'
})

const ScienceModel = mongoose.model<sciencesInterface>('sciences', scienceSchema)

export default ScienceModel;