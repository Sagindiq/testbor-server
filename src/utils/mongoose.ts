import mongoose from "mongoose";
import {UsersModel, ScienceModel} from '../model'

const mongo = async() => {
    return await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
}

export default mongo