import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    pass:{
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)