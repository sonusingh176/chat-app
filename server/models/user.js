const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select:false// This will not return password in the response by default
    },
    profilePic:{
        type: String,
        required: false,
        default: 'https://www.gravatar.com/avatar/?d=mp&f=y'
    }
},{timestamps: true});
module.exports = mongoose.model('user', userSchema);