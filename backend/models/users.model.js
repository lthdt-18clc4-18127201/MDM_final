import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    birthday: {
        type: String
    },
    address: {
        type: String
    },
    job: {
        trype: String
    }
}, {
    timestamps: true
})

export default mongoose.model("User", UserSchema);