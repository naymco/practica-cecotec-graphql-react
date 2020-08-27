import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    avatar: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    products: {
        type: [],
        default: []
    }

});

const userModel = mongoose.model('user', userSchema);

export default userModel;