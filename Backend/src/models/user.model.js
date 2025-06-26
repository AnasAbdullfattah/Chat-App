import mongoose from 'mongoose';

const user = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    profilepic: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}
, {
    timestamps: true
});

const User = mongoose.model('User', user);
export default User;