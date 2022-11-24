import mongoose from "mongoose";
import {} from '../model'

const mongo = async() => {
    return await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
}

export default mongo