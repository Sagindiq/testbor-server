import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    option_title: {
        type: String
    }
}, {
    collection: 'options'
})

const OptionModel = mongoose.model('options', optionSchema)

export default OptionModel;