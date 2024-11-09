const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    totalUpvotes: { type: Number, default: 0 },
    totalDownvotes: { type: Number, default: 0 },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});



module.exports = mongoose.model("User",userSchema)
