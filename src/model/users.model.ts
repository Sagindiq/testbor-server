import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface UserInterface extends Document {
    id: ObjectId,
    name: string,
    email: string,
    username: string,
    password: string,
    address: string,
    gender: string
}

const userSchema: Schema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
        enum: ['male', 'female']
    }
}, {
    collection: 'users'
})

const UserModel = mongoose.model<UserInterface>('users', userSchema)

export default UserModel